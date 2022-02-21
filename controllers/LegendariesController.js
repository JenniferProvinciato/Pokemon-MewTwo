const LegendariesServices = require('../services/LegendariesServices');

const controller = {
    index: (request, response) => {
        const legendariesList = LegendariesServices.listLegendaries()
        return response.json(legendariesList);
    }
}

module.exports = controller;