AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "spider man",
          url: "./assets/thumbnails/spiderman.png",
        },
        {
          id: "superman",
          title: "super man",
          url: "./assets/thumbnails/superman.jpg",
        },
  
        {
          id: "batman",
          title: "bat amn",
          url: "./assets/thumbnails/batman.jpg",
        },
        {
          id: "ironman",
          title: "iron man",
          url: "./assets/thumbnails/ironman.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position,id){
      const entiyEL= document.createElement("a-entity");
      entityEl.setAttribute("id",id);
      entityEL.setAttribute("visible",true)
      entityEL.setAttribute(geometry,{
        primitive:"ring",
        rediusInner:9,
        radiusOuter:10,
      });
      entityEl.setAttribute("position",position);
      entityEL.setAttribute("material",{
        color:"#0077CC",
        opacity:1
      });
      return entityEL;
    },
    createThumbNail:function(item){
      const entityEl=document.createElement("a-entity");
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9,
      });
      entityEL.setAttribute("material",{src: item.url});
  
      return entityEl;
    },
  
    createTitleEl:function(position,item){
      const entityEL =document.createElement("a-entity");
      entiyEL.setAttribute("text",{
        fornt:"exo2bold",
        align:"center",
        idth:70,
        color:"#e65100",
        value: item.title
      });
  
      const elPosition = position;
      elPosition.y=-20;
      entityEl.setAttribute("position",elPosition);
      entityEl.setAttribute("visible",true);
      return entityEL;
  
    }
  
    
  });
  