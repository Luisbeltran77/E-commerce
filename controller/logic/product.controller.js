const productDto = require("../../model/dto/product.dto");
const config = require("config");


/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createProduct = (req, res, next) => {
    let product = {
        idProduct: req.body.idProduct,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        qualification: req.body.qualification,
        id_category: req.body.id_category,
        id_branch: req.body.id_branch,
        discount: req.body.discount
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.updateProduct = (req, res, next) => {
    let product = {
        idProduct: req.body.idProduct,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        qualification: req.body.qualification,
        id_category: req.body.id_category,
        id_branch: req.body.id_branch,
        discount: req.body.discount
    };
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getById = (req, res, next) => {
    productDto.getById({ idProduct: req.params.idProduct }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteProduct = () => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(204).json();
    });
};