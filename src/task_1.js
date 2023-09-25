const notification = {
    radio: [{
      source: 'radio',
      text: 'Загроза застосування балістичного озброєння!',
      date: '01.08.2023'
    }],
    sms: [{
      source: 'sms',
      text: 'Загроза застосування хімічної зброї!',
      date: '10.08.2023'
    }],
    email: [{
      source: 'email',
      text: 'Загроза застосування ракетного озброєння!',
      date: '30.08.2023'
    }],
    ZASCO: [{
      source: 'ZASCO',
      text: 'Загроза застосування ядерної зброї!',
      date: '30.08.2023'
    }],
    [Symbol.iterator]() {
        let valueIndex = 0;
        let inerIndex = 0;
        const values = [];

        for (const key in this) {
            values.push(this[key]);
        }

        return {

            next() {

              if (inerIndex === values[valueIndex].length) {
                inerIndex = 0;
                valueIndex++;
              }

              if (valueIndex === values.length) { return {done: true} }

              return {
                value: values[valueIndex][inerIndex++],
                done: false
              }   
            }
        }
    }
}

for (const item of notification) {
  console.log(item)
}