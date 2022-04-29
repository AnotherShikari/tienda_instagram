const express = require('express');

const OriginSaleService = require('../services/originSale.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createOriginSaleSchema, updateOriginSaleSchema, getOriginSaleSchema } = require('../schemas/originSale.schema');

const router = express.Router();
const service = new OriginSaleService();

router.get('/', async (req, res, next) => {
  try {
    const method = await service.find();
    res.json(method);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOriginSaleSchema, 'params'),
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

router.get('/getTotalByOrigin/:id',
  validatorHandler(getOriginSaleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const origin = await service.getTotalByOrigin(id);
      res.json(origin);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOriginSaleSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrigin = await service.create(body);
      res.status(201).json(newOrigin);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getOriginSaleSchema, 'params'),
  validatorHandler(updateOriginSaleSchema, 'body'),
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
  validatorHandler(getOriginSaleSchema, 'params'),
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
