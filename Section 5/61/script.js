const measureKalvin = function () {
    const measurment = {
        type: 'temp',
        unit: 'celsius',


        // C) Bug Fixed
        value: Number(prompt('Degrees celsius:'))
        // value: (prompt('Degrees celsius:'))

    }

    // debugger;
    console.log(measurment)

    // Bug Found
    console.log(typeof measurment.value); // 'string'
    console.table(measurment);

    // console.warn(measurment.value);
    // console.error(measurment.value);

    const kelvin = measurment.value + 273;
    return kelvin
}

// A) Identify the Bug
console.log(measureKalvin());