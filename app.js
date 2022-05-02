//Arreglo de meses
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  //Arreglo de dias
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  //Declaracion de variables
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  //Variables para obtener dia, mes y año actual
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  //Los meses se basan en el índice 0
  //Fecha furura, sumandole 10 dias, 11:30 minutos
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
  // Ejemplo -> let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  //Variables para obtener  dia, mes y año actual
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  //Actualizacion meses para la impresion de pantalla en HTML
  let month = futureDate.getMonth();
  month = months[month];
    //Actualizacion dias para la impresion de pantalla en HTML
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  //Impresion cuenta regresiva con la futura fecha en HTML
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  //Funcion para obtener el tiempo restante 
  function getRemaindingTime() {
      //Fecha actual
    const today = new Date().getTime();
    //Fecha futura
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // Valor en milisegundos
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // Calsulo de todos los valores
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    // Enviar valores para el array
    const values = [days, hours, minutes, seconds];

    //Funcion para el formato de tiempo
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
    //Actualizacion en HTML
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
    //En caso de que se acabe el tiempo de la cuenta regresiva
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // Ceunta regresiva
  let countdown = setInterval(getRemaindingTime, 1000);
  //Enviar valores iniciales
  getRemaindingTime();

  /*Temas vistos
    getFullYear(): devuelve el año de la fecha indicada acorde a la hora local.
    getMonth(): devuelve el mes de la fecha indicada acorde a la hora local.
    getDate(): devuelve el dia de la fecha indicada acorde a la hora local.
    Math.floor():Devuelve el máximo entero menor o igual a un número. 
    setInterval(): Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
    clearInterval(): Cancela una acción reiterativa que se inició mediante una llamada a setInterval().
  */