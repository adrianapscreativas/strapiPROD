'use strict';

/**
 * A set of functions called "actions" for `search-plasma`
 */

module.exports = {
  exampleAction: async (ctx, next) => {

    // const data:object;
    try {

      // const bulktInventario =await strapi.db.query('api::inventario.inventario').createMany({
      //   data: [
      //     {
      //       herramientas:1,
      //       tecnologias:1,
      //       tubos:1,
      //       cantidad:"1",
      //       presionsmins:1,
      //       presionsmaxes:1,
      //       presion:7
      //     },
      
      //   ],
      // });
      
      try{
        const bulktTecnolgoia = await strapi.db.query('api::tecnologia.tecnologia').createMany({
          data: [
            {
              name:'Chammas Plasma Perforator',
               
            },
            {
              name:'Chammas Plasma Cutter',
               
      
            },
            {
              name:'Chammas Plasma Cutter SELF',
               
      
            },
        
          ],
        });
        
      }catch(e){
        console.log(e.message)
      }
      
      
      const bulkCreateDiametro= await strapi.db.query('api::tubo.tubo').createMany({
        data:[
          {
            diametro_tubo:"2-3/8 in",
             
          },
          {
            diametro_tubo:"2-7/8 7in",
             
          },
          {
            diametro_tubo:"3- 1/2 in",
             
          },
          {
            diametro_tubo:"4-1/2 in",
             
          }
        ]
      })
      
      
      //herramientas
      const bulkCreateHerramienta = await strapi.db.query('api::herramienta.herramienta').createMany({
        data:[
          {
            codigo:"1500-1",
            descripcion:"Adjustable Top Centralizer",
             
          },
          { 
             codigo:"150101-HES",
            descripcion:"Electrical Contact Button Sub ",         
          },
          {
             codigo:"1500-5",
            descripcion:"Thermite Cartridge",         
          },
          {
             codigo:"1500-PLT-5",
             descripcion:"Thermite Pellet Rod",         
          },
          {
             codigo:"1500-EXT-5",
            descripcion:"5in Extension (if needed)",
             
          },
          { 
             codigo:"1500-15-P",
            descripcion:"Perforator Assembly",         
          },
          {
             codigo:"1500-30-P",
            descripcion:"Perforator Assembly",         
          },
          {
             codigo:"1500-10-C",
            descripcion:"Cutter Assembly",         
          },
          {
             codigo:"1500-25-C",
            descripcion:"Cutter Assembly",
             
          },
          { 
             codigo:"SA1500-10-C",
            descripcion:"Cutter Assembly ",         
          },
          {
             codigo:"SA1500-25-C",
            descripcion:"Cutter Assembly",         
          },
          {
             codigo:"150016-A",
            descripcion:"Bottom Centralizer",         
          },
          {
             codigo:"150016-B",
            descripcion:"Bottom Centralizer",
             
          },
          { 
             codigo:"1500-10",
            descripcion:"Top Stabilizer w/tandem",         
          },
          {
             codigo:"1500-12",
            descripcion:"Bottom Stabilizer",         
          },
          {
             codigo:"1500-BP",
            descripcion:"Bull Plug",         
          },
          {
             codigo:"1500-20-P",
            descripcion:"Perforator Assembly",         
          },
          {
             codigo:"1500-40-P",
            descripcion:"Perforator Assembly"
          },
          {
             codigo:"1500-20-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"1500-40-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"SA1500-20-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"SA1500-40-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"2000-2",
            descripcion:"Ignition Assembly"
          },
          {
             codigo:"2000-5",
            descripcion:"Thermite Cartridge"
          },
          {
             codigo:"2000-PLT-5",
            descripcion:"Thermite Pellet Rod"
          },
          {
             codigo:"2000-EXT-5",
            descripcion:"5in Extension (if needed)"
          },
          {
             codigo:"2000-15-P",
            descripcion:"Perforator Assembly"
          },
          {
             codigo:"2000-35-P",
            descripcion:"Perforator Assembly",
          },
          {
             codigo:"2000-15-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"2000-35-C",
            descripcion:"Cutter Assembly"
          },
          {
             codigo:"200016-A",
            descripcion:"Bottom Centralizer"
          },
          {
             codigo:"2000-10",
            descripcion:"Top Stabilizer w/tandem",
      
          },
          {
             codigo:"2000-12",
            descripcion:"Bottom Stabilizer"
          },
          {
             codigo:"2000-BP",
            descripcion:"Bull Plug"
          },
          {
           codigo:"2500-1",
          descripcion:"Adjustable Top Centralizer for 2-1/2"
          },
          {
             codigo:"168101-HES",
            descripcion:"Electrical Contact Button Sub "
          },
        {
             codigo:"2500-PLT-5",
            descripcion:"Thermite Pellet Rod for 2.5 OD"
        }   ,
        {
             codigo:"2500-EXT-5",
            descripcion:"5in Extension (if needed)"
        },
        {
             codigo:"2500-15-P",
            descripcion:"Perforator Assembly"
        },
        {
             codigo:"2500-15-C",
            descripcion:"Cutter Assembly",
      
        },
        {
             codigo:"2500-35-C",
            descripcion:"Cutter Assembly"
        },
        {
             codigo:"362016-A",
            descripcion:"Adj Bottom Centralizer for 2.5 OD "
        },
        {
             codigo:"362016-B",
            descripcion:"Adj. Bottom Centralizer for 2.5 OD"
        },
        {
             codigo:"2500-10",
            descripcion:"Top Stabilizer w/tandem"
        },
        {
             codigo:"2500-12",
            descripcion:"Bottom Stabilizer"   
        },
        {
             codigo:"2500-BP",
            descripcion:"Bull Plug"
        }
      
        ]
      })
      //Presion
      const bulkCreatePresion = await strapi.db.query('api::presion.presion').createMany({
        data:[
          {
             min:2000,
            max:5000,
             
          },
          { 
             min:5000,
            max:8000,         
          },
          { 
            min:8000,
           max:1000,         
         },
         { 
            min:10000,
           max:12000,         
         },
         { 
            min:12000,
           max:15000,         
         },
         { 
            min:0,
           max:4500,         
         },
         { 
            min:4500,
           max:8000,         
         },
         { 
            min:10000,
           max:12500,         
         },
         { 
            min:12500,
           max:15000,         
         },
         { 
            min:2000,
           max:4500,         
         },
         { 
            min:2000,
           max:4000,         
         },
         { 
            min:8000,
           max:9000,         
         },
         { 
            min:9000,
           max:10000,         
         },
         { 
            min:10000,
           max:15000,         
         },
         { 
            min:0,
           max:5000,         
         },
         { 
            min:5000,
           max:7500,         
         },
         { 
            min:7500,
           max:9000,         
         },
         { 
            min:9000,
           max:10000,         
         },
         { 
            min:12000,
           max:13000,         
         },
         { 
            min:13000,
           max:15000,         
         },
         { 
            min:0,
           max:5500,         
         },
         { 
            min:5500,
           max:8500,         
         },
         { 
            min:8500,
           max:10000,         
         },
         { 
            min:5500,
            max:8000,         
         },
         { 
            min:10000,
           max:11500,         
         },
         { 
            min:11500,
           max:12500,         
         },
         {
            min:0,
            max:4000
         },
         { 
            min:4000,
           max:6000,         
         },
         { 
            min:6000,
           max:8000,         
         },
      
          
      
        ]
      })
      
      
      
          const response = reponseApi("entrp","peticion Correcta")
          return response
          } catch (err) {
            ctx.body = err;
          }
        }
};
