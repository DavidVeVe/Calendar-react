function CalendarNavigation({ getPrevMonth, getNextMonth }) {
    return (
        <>
            <button onClick={getPrevMonth}> Prev Month </button>
            <button onClick={getNextMonth}> Next Month </button>
        </>
    );
}

export default CalendarNavigation
