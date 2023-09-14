const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: String,
  state: String,
  country: String,
  zip_code: {
    type: Number,
    validate: {
      validator: function(v) {
        return /\d{5}/.test(v);
      },
      message: props => `${props.value} is not a valid zip code!`
    }
  },
  address: String,
});

const accommodationSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 10 && !/Free|Offer|Book|Website/.test(v);
      },
      message: props => `${props.value} is not a valid accommodation name!`
    }
  },
  rating: {
    type: Number,
    validate: {
      validator: function(v) {
        return Number.isInteger(v) && v >= 0 && v <= 5;
      },
      message: props => `${props.value} is not a valid rating!`
    }
  },
  category: {
    type: String,
    enum: ['hotel', 'alternative', 'hostel', 'lodge', 'resort', 'guest-house'],
    message: props => `${props.value} is not a valid category!`
  },
  location: {
    type: locationSchema,
    required: true
  },
  image: {
    type: String,
    validate: {
      validator: function(v) {
        try {
          new URL(v);
          return true;
        } catch (e) {
          return false;
        }
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  reputation: {
    type: Number,
    validate: {
      validator: function(v) {
        return Number.isInteger(v) && v >= 0 && v <= 1000;
      },
      message: props => `${props.value} is not a valid reputation!`
    }
  },
  reputationBadge: {
    type: String,
    default: function() {
      if (this.reputation <= 500) {
        return 'red';
      } else if (this.reputation <= 799) {
        return 'yellow';
      } else {
        return 'green';
      }
    }
  },
  price: {
    type: Number,
    validate: {
      validator: function(v) {
        return Number.isInteger(v);
      },
      message: props => `${props.value} is not a valid price!`
    }
  },
  availability: {
    type: Number,
    validate: {
      validator: function(v) {
        return Number.isInteger(v);
      },
      message: props => `${props.value} is not a valid availability!`
    }
  },
});

module.exports = mongoose.model("Accommodation", accommodationSchema);
