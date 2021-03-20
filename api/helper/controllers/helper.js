'use strict';
const geolib = require('geolib');

var jobarray
module.exports = {
  async fetchJobs(ctx){
    var lat = ctx.query.latitude
    var long = ctx.query.longitude
    var rad = ctx.query.radius || 5;

    if(lat==null || long==null){
      return ctx.send({
        status: 400, //bad request
        message: "provide lat and long"
      });
    }

    var jobs = await strapi.query("job").find({
      isDone: false
    })

    await jobs.map(job=>{
      if(geolib.getDistance({"latitude":lat,"longitude":long},
      {"latitude":job.latitude,"longitude":job.longitude})<rad){
        jobarray.push(job);
      }
    })

    return ctx.send({
      status: 200,
      jobs: jobarray
    })

  }
};
