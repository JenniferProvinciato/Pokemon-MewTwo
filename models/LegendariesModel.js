const Sequelize = require('sequelize');
const db = require('./db');
const {DataTypes, Model} = require("sequelize");

function LegendariesModel(id, name, description, type,
                          healthPoints, specialAttack,
                          defense, attack, experience,
                          specialDefense) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experience = experience;
    this.specialDefense = specialDefense;

}

module.exports = LegendariesModel;