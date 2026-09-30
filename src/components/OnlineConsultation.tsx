import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Video, ChevronLeft, ChevronRight, Clock, CalendarDays } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919840184964';
// Mon-Sat: 10 AM - 9 PM. Sunday: 1 hour shorter at both ends (11 AM - 8 PM).
const WEEKDAY_HOURS = { open: 10, close: 21 };
const SUNDAY_HOURS = { open: 11, close: 20 };
const SLOT_MINUTES = 30;
const MAX_DAYS_AHEAD = 15;

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const PATIENT_TYPES = ['Adult', 'Child', 'Existing patient'];

interface Slot {
  hour: number;
  minute: number;
}

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

// Only 30-minute chunks inside working hours are ever generated.
const generateSlots = (day: Date): Slot[] => {
  const { open, close } = day.getDay() === 0 ? SUNDAY_HOURS : WEEKDAY_HOURS;
  const slots: Slot[] = [];
  for (let minutes = open * 60; minutes < close * 60; minutes += SLOT_MINUTES) {
    slots.push({ hour: Math.floor(minutes / 60), minute: minutes % 60 });
  }
  return slots;
};

const slotStart = (day: Date, slot: Slot) =>
  new Date(day.getFullYear(), day.getMonth(), day.getDate(), slot.hour, slot.minute);

const formatTime = (hour: number, minute: number) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}:${minute.toString().padStart(2, '0')} ${period}`;
};

const slotLabel = (slot: Slot) => formatTime(slot.hour, slot.minute);

const slotRangeLabel = (slot: Slot) => {
  const end = slot.hour * 60 + slot.minute + SLOT_MINUTES;
  return `${slotLabel(slot)} - ${formatTime(Math.floor(end / 60), end % 60)}`;
};

const slotKey = (slot: Slot) => `${slot.hour}:${slot.minute}`;

const OnlineConsultationSection: React.FC = () => {
  // "now" is set after mount so the static export does not bake in the build time.
  // Times are read in the visitor's local time (clinic hours assume IST).
  const [now, setNow] = useState<Date | null>(null);
  const [viewMonth, setViewMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [patientType, setPatientType] = useState(PATIENT_TYPES[0]);
  const [concern, setConcern] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const current = new Date();
    setNow(current);
    setViewMonth(new Date(current.getFullYear(), current.getMonth(), 1));
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const isSlotAvailable = (day: Date, slot: Slot) => !!now && slotStart(day, slot) > now;

  const isDayBookable = (day: Date) => {
    if (!now) return false;
    const today = startOfDay(now);
    if (day < today || day > addDays(today, MAX_DAYS_AHEAD)) return false;
    return generateSlots(day).some((slot) => isSlotAvailable(day, slot));
  };

  // Drop the selection if time moves past it (or the day stops being bookable).
  useEffect(() => {
    if (!selectedDate) return;
    if (!isDayBookable(selectedDate)) {
      setSelectedDate(null);
      setSelectedSlot(null);
    } else if (selectedSlot && !isSlotAvailable(selectedDate, selectedSlot)) {
      setSelectedSlot(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now]);

  const calendarDays = useMemo(() => {
    if (!viewMonth) return [];
    const firstWeekday = viewMonth.getDay();
    const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = Array(firstWeekday).fill(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d));
    }
    return cells;
  }, [viewMonth]);

  const canGoPrev = !!now && !!viewMonth &&
    viewMonth > new Date(now.getFullYear(), now.getMonth(), 1);
  const canGoNext = !!now && !!viewMonth &&
    new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1) <= addDays(startOfDay(now), MAX_DAYS_AHEAD);

  const changeMonth = (delta: number) => {
    if (!viewMonth) return;
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + delta, 1));
  };

  const selectDate = (day: Date) => {
    setSelectedDate(day);
    setSelectedSlot(null);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedSlot) {
      setError('Please pick a date and a time slot.');
      return;
    }
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 13) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    // Re-check at submit time in case the slot went past while the form was open.
    if (!isSlotAvailable(selectedDate, selectedSlot)) {
      setSelectedSlot(null);
      setError('That slot is no longer available. Please pick another time.');
      return;
    }
    setError('');

    const dateText = selectedDate.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const message = [
      "Hi Dr. Loki's, I'd like to request an *Online Consultation*.",
      '',
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Patient type: ${patientType}`,
      `Preferred date: ${dateText}`,
      `Preferred time: ${slotRangeLabel(selectedSlot)}`,
      `Concern: ${concern.trim() || 'Not specified'}`,
      '',
      'Please confirm availability. Thank you!',
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent';

  return (
    <section
      id="online-consultation"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-lime-50"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cpath d=\"M0,300 Q400,200 800,300 Q1000,350 1200,300 V0 H0 Z\" fill=\"%23C1D72F\" opacity=\"0.1\"/%3E%3Cpath d=\"M0,500 Q400,400 800,500 Q1000,550 1200,500 V0 H0 Z\" fill=\"%2310B981\" opacity=\"0.1\"/%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-lime-100 text-lime-800 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4 mr-2" />
            Consult From Home
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
            Online{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">
              Consultation
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pick a date and time that suits you (Mon-Sat 10:00 AM - 9:00 PM, Sunday 11:00 AM - 8:00 PM). Send us your request on WhatsApp and
            Dr. Loki will confirm the availability.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-emerald-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 rounded-2xl blur-lg"></div>
          <form
            onSubmit={handleSubmit}
            className="relative bg-white rounded-xl shadow-2xl border border-gray-100 p-6 sm:p-8"
            noValidate
          >
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left - Calendar */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-4 flex items-center">
                  <CalendarDays className="w-5 h-5 text-lime-500 mr-2" />
                  1. Choose a date
                </h3>

                {viewMonth ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <button
                        type="button"
                        onClick={() => changeMonth(-1)}
                        disabled={!canGoPrev}
                        aria-label="Previous month"
                        className="p-2 rounded-full hover:bg-lime-50 text-lime-600 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="font-semibold text-gray-800">
                        {viewMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeMonth(1)}
                        disabled={!canGoNext}
                        aria-label="Next month"
                        className="p-2 rounded-full hover:bg-lime-50 text-lime-600 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {WEEKDAYS.map((w) => (
                        <div key={w} className="text-center text-xs font-medium text-gray-500 py-1">
                          {w}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, i) => {
                        if (!day) return <div key={`empty-${i}`} />;
                        const bookable = isDayBookable(day);
                        const selected = !!selectedDate && isSameDay(day, selectedDate);
                        const today = !!now && isSameDay(day, now);
                        return (
                          <button
                            key={day.toISOString()}
                            type="button"
                            disabled={!bookable}
                            onClick={() => selectDate(day)}
                            aria-pressed={selected}
                            className={`aspect-square rounded-lg text-sm font-medium transition-all duration-200 ${
                              selected
                                ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white shadow-lg'
                                : bookable
                                ? 'text-gray-800 hover:bg-lime-50 hover:text-lime-600'
                                : 'text-gray-300 cursor-not-allowed'
                            } ${today && !selected ? 'ring-2 ring-lime-400' : ''}`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      Bookings open up to {MAX_DAYS_AHEAD} days ahead.
                    </p>
                  </>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-400 text-sm">Loading calendar...</div>
                )}
              </div>

              {/* Right - Slots and details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-lime-500 mr-2" />
                    2. Choose a time
                  </h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                      {generateSlots(selectedDate).map((slot) => {
                        const available = isSlotAvailable(selectedDate, slot);
                        const selected = !!selectedSlot && slotKey(selectedSlot) === slotKey(slot);
                        return (
                          <button
                            key={slotKey(slot)}
                            type="button"
                            disabled={!available}
                            onClick={() => {
                              setSelectedSlot(slot);
                              setError('');
                            }}
                            aria-pressed={selected}
                            className={`px-2 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                              selected
                                ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white border-transparent shadow-md'
                                : available
                                ? 'border-gray-200 text-gray-700 hover:border-lime-400 hover:text-lime-600'
                                : 'border-gray-100 text-gray-300 cursor-not-allowed line-through'
                            }`}
                          >
                            {slotLabel(slot)}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
                      Select a date to see the available 30-minute slots.
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-poppins mb-4">3. Your details</h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                    <select
                      name="patientType"
                      value={patientType}
                      onChange={(e) => setPatientType(e.target.value)}
                      className={inputClass}
                    >
                      {PATIENT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="concern"
                      placeholder="Reason / concern (optional)"
                      rows={3}
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {selectedDate && selectedSlot && (
                  <div className="p-4 rounded-lg bg-gradient-to-r from-lime-50 to-emerald-50 border border-lime-100 text-sm text-gray-700">
                    Requested:{' '}
                    <span className="font-semibold">
                      {selectedDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })},{' '}
                      {slotRangeLabel(selectedSlot)}
                    </span>
                  </div>
                )}

                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedSlot}
                    className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white px-4 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-lime-600 hover:to-emerald-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaWhatsapp className="text-2xl flex-shrink-0" />
                    <span className="sm:hidden">Request on WhatsApp</span>
                    <span className="hidden sm:inline">Request Online Consultation on WhatsApp</span>
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    This is a request, not a confirmed booking. The doctor will confirm availability on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineConsultationSection;
