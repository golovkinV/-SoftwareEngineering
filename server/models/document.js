module.exports = mongoose => {
    const Schema = mongoose.Schema;

    const documentSchema = new Schema({
        name: String,
        date: String,
        desc: String,
        role: {
            type: Schema.Types.ObjectId,
            ref: "Role",
        }
    })

    documentSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("Document", documentSchema);
};