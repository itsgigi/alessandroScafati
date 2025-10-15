import { useState } from 'react';

interface Event {
    id: string;
    image: string;
    title: string;
    description: string;
    date: string;
    fullDate?: Date;
}

interface CalendarProps {
    onDateSelect: (date: Date | null) => void;
    selectedDate?: Date | null;
    events?: Event[];
}

const Calendar = ({ onDateSelect, selectedDate, events = [] }: CalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [localSelectedDate, setLocalSelectedDate] = useState<Date | null>(selectedDate || null);

    const months = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];

    const weekDays = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 0);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        
        // Aggiungi giorni vuoti per allineare il primo giorno del mese
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        // Aggiungi tutti i giorni del mese
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        return days;
    };

    const handleDateClick = (date: Date) => {
        setLocalSelectedDate(date);
        onDateSelect(date);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentMonth(today);
        setLocalSelectedDate(today);
        onDateSelect(today);
    };

    const handleShowAllClick = () => {
        setLocalSelectedDate(null);
        onDateSelect(null);
    };

    const isSameDate = (date1: Date | null, date2: Date | null) => {
        if (!date1 || !date2) return false;
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return isSameDate(date, today);
    };

    // Funzione per verificare se una data ha eventi
    const hasEvents = (date: Date) => {
        return events.some(event => 
            event.fullDate && isSameDate(event.fullDate, date)
        );
    };

    // Funzione per contare gli eventi in una data
    const getEventCount = (date: Date) => {
        return events.filter(event => 
            event.fullDate && isSameDate(event.fullDate, date)
        ).length;
    };

    const days = getDaysInMonth(currentMonth);

    return (
        <div className="bg-primary min-h-[500px] rounded-lg p-6 border border-gold/30">
            <div className="flex items-center justify-between mb-6 font-lato">
                <h2 className="text-xl font-semibold text-white">Calendario Eventi</h2>
                <div className="flex gap-2">
                    <button
                        onClick={handleTodayClick}
                        className="px-3 py-1 text-sm bg-blue-800 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                        Oggi
                    </button>
                    <button
                        onClick={handleShowAllClick}
                        className="px-3 py-1 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
                    >
                        Mostra tutti
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4 font-lato">
                <button
                    onClick={handlePrevMonth}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <h3 className="text-lg font-medium text-white">
                    {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                
                <button
                    onClick={handleNextMonth}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-400">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 font-lato">
                {days.map((day, index) => {
                    if (!day) {
                        return <div key={index} className="p-2"></div>;
                    }

                    const isSelected = isSameDate(day, localSelectedDate);
                    const isTodayDate = isToday(day);
                    const dayHasEvents = hasEvents(day);
                    const eventCount = getEventCount(day);

                    return (
                        <button
                            key={index}
                            onClick={() => handleDateClick(day)}
                            className={`relative p-2 text-sm rounded transition-all hover:bg-gray-700 ${
                                isSelected
                                    ? 'bg-gold-light border border-red-500/40 text-black'
                                    : isTodayDate
                                    ? 'bg-blue-500/20 text-blue-300 font-semibold'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            {day.getDate()}
                            {dayHasEvents && (
                                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center text-xs ${
                                    isSelected 
                                        ? 'bg-red-500 text-blue-600' 
                                        : 'bg-red-500 text-white'
                                }`}>
                                    {eventCount > 1 ? eventCount : ''}
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-700">
                <p className="text-sm text-gray-300">
                    {localSelectedDate ? (
                        <>
                            Data selezionata: <span className="text-white font-medium">
                                {localSelectedDate.toLocaleDateString('it-IT', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </>
                    ) : (
                        <>
                            Visualizzazione: <span className="text-white font-medium">Tutti gli eventi</span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Calendar;
