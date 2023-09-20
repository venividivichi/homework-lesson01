
const notification = [
  {
    source: 'radio',
    text: 'Загроза застосування балістичного озброєння!',
    date: '01.08.2023'
  },
  {
    source: 'sms',
    text: 'Загроза застосування хімічної зброї!',
    date: '10.08.2023'
  },
  {
    source: 'email',
    text: 'Загроза застосування ракетного озброєння!',
    date: '30.08.2023'
  },
  {
    source: 'ZASCO',
    text: 'Загроза застосування ядерної зброї!',
    date: '30.08.2023'
  },
]

function transform(arr) {

  let response = {};

  for (item of arr) {
    response[item.source] = [{text: item.text, date: item.date}];
  }

  return response

}

console.log(transform(notification));