const express = require('express');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../libs/sequelize');
const ProductStockService = require('../services/productStock.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductStockSchema, updateProductStockSchema,  getProductStockSchema } = require('../schemas/productStock.schema');

const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductStockService();

router.get('/', async (req, res, next) => {
  try {
    const method = await service.find();
    res.json(method);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductStockSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const origin = await service.findOne(id);
      res.json(origin);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(createProductStockSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getProductStockSchema, 'params'),
  validatorHandler(updateProductStockSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const origin = await service.update(id, body);
      res.json(origin);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProductStockSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
