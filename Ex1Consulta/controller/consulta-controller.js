exports.get = async (req, res, next) => {
    try {
        return res.status(201).send();
    } catch (error) {
        return res.status(200).send({ message: error.message });
    }
};