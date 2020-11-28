
module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            email: String,
            password: String,
            firstName: String,
            lastName: String,
            country: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("user", schema);
};