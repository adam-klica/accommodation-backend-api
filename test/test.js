const AccommodationModal = require("./AccommodationModal");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Accommodations", () => {
  beforeEach((done) => {
    AccommodationModal.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET accommodation", () => {
    it("it should GET all the accommodations", (done) => {
      chai
        .request(app)
        .get("/api/accommodations")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST accommodation", () => {
    it("it should POST a new accommodation", (done) => {
      let accommodation = {
        name: "Example name",
        rating: 5,
        category: "hotel",
        location: {
        city: "Cuernavaca",
        state: "Morelos",
        country: "Mexico",
        zip_code: "62448",
        address: "Boulevard Díaz Ordaz No. 9 Cantarranas"
        },
        image: "image-url.com",
        reputation: 8990,
        reputationBadge: "green",
        price: 1000,
        availability: 10
      };
      chai
        .request(app)
        .post("/api/accommodations")
        .send(accommodation)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id accommodation", () => {
    it("it should GET an accommodation by the id", (done) => {
      let accommodation = new AccommodationModal({
        name: "Example name",
        rating: 5,
        category: "hotel",
        location: {
        city: "Cuernavaca",
        state: "Morelos",
        country: "Mexico",
        zip_code: "62448",
        address: "Boulevard Díaz Ordaz No. 9 Cantarranas"
        },
        image: "image-url.com",
        reputation: 8990,
        reputationBadge: "green",
        price: 1000,
        availability: 10
      });
      accommodation.save((err, accommodation) => {
        chai
          .request(app)
          .get("/api/accommodations/" + accommodation.id)
          .send(accommodation)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id accommodation", () => {
    it("it should UPDATE an accommodation for the given id", (done) => {
      let accommodation = new AccommodationModal({
        name: "Example name",
        rating: 5,
        category: "hotel",
        location: {
        city: "Cuernavaca",
        state: "Morelos",
        country: "Mexico",
        zip_code: "62448",
        address: "Boulevard Díaz Ordaz No. 9 Cantarranas"
        },
        image: "image-url.com",
        reputation: 8990,
        reputationBadge: "green",
        price: 1000,
        availability: 10
      });
      accommodation.save((err, accommodation) => {
        chai
          .request(app)
          .put("/api/accommodations/" + accommodation.id)
          .send({
            name: "Example name",
            rating: 5,
            category: "hotel",
            location: {
            city: "Cuernavaca",
            state: "Morelos",
            country: "Mexico",
            zip_code: "62448",
            address: "Boulevard Díaz Ordaz No. 9 Cantarranas"
            },
            image: "image-url.com",
            reputation: 8990,
            reputationBadge: "green",
            price: 1000,
            availability: 10
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id accommodation", () => {
    it("it should DELETE an accommodation for the given id", (done) => {
      let accommodation = new AccommodationModal({
        name: "Example name",
        rating: 5,
        category: "hotel",
        location: {
        city: "Cuernavaca",
        state: "Morelos",
        country: "Mexico",
        zip_code: "62448",
        address: "Boulevard Díaz Ordaz No. 9 Cantarranas"
        },
        image: "image-url.com",
        reputation: 8990,
        reputationBadge: "green",
        price: 1000,
        availability: 10
      });
      accommodation.save((err, accommodation) => {
        chai
          .request(app)
          .delete("/api/accommodations/" + accommodation.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});