const express = require('express');

const ShippingMethodService = require('../services/shippingMethod.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createShippingMethodSchema, updateShippingMethodSchema, getShippingMethodSchema } = require('../schemas/shippingMethod.schema');

const router = express.Router();
const service = new ShippingMethodService();

router.get('/', async (req, res, next) => {
  try {
    const method = await service.find();
    res.json(method);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getShippingMethodSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const method = await service.findOne(id);
      res.json(method);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createShippingMethodSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMethod = await service.create(body);
      res.status(201).json(newMethod);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getShippingMethodSchema, 'params'),
  validatorHandler(updateShippingMethodSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const method = await service.update(id, body);
      res.json(method);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getShippingMethodSchema, 'params'),
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
