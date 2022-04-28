import * as React from 'react';

const tester = () => {
  const greeting = 'Welcome to React';

  // eslint-disable-next-line react-hooks/rules-of-hooks
  handleDateChange = date => {
    let selectedDateFromCalender = date.toUTCString();
    this.setState({
          actualStartDate: selectedDateFromCalender,
      });}

  return (
<DatePicker
selected={this.state.startDate}
onChange={this.handleDateChange}/>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default tester;