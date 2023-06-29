export const convertMinutesToHoursAndMinutes = (minutes: number) =>  {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    const result = hours+ 'h '+ remainingMinutes + 'm'
    return result
  }
  