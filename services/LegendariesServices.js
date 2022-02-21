const LegendaryModel = require('../models/LegendariesModel');

const LegendariesService = {
    listLegendaries: () => {

        const Mew = new LegendaryModel(1, 'Mew','Lorem ipsum dolor sit amet,' +
            ' consectetuer adipiscing elit. Aenean' +
            ' commodo ligula eget dolor. Aenean massa.' +
            ' Cum sociis natoque penatibus et magnis dis' +
            ' parturient montes, nascetur ridiculus mus.' +
            ' Donec quam felis, ultricies nec, pellentesque eu,' +
            ' pretium quis, sem. Nulla consequat massa quis enim. ',
            'Psychic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000'
        )
        return [Mew]
    }
}

module.exports = LegendariesService;