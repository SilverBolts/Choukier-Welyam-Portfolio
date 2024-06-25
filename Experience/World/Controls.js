import * as THREE from "three";
import Experience from "../Experience.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "/node_modules/gsap/ScrollTrigger.js";


export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room;
        gsap.registerPlugin(ScrollTrigger);

        this.setPath();

}
setPath() {}
     setScrollTrigger(){
        ScrollTrigger.matchMedia({
            //desktop
            "(min-width: 969px)": () => {
                console.log("fired desktop");

                //first section -----------------------------------

                this.firstMoveTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: false,
                    },
                });
                 this.firstMoveTimeline.to(
                     this.room, { 
                         x: () => {
                             return this.sizes.width * 0.0014;
                         },
                      });

                     //second section -------------------
                     this.secondMoveTimeline = new gsap.timeline({
                        scrollTrigger: {
                            trigger: ".second-move",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.6,
                            invalidateOnRefresh: true,
                        },
                    });
                    this.secondMoveTimeline.to(
                        this.room, { 
                            x: () => {
                                return 1
                            },
                            z:() => {
                                return this.sizes.high * 0.0032;
                            },
                        });
                        this.firstMoveTimeline.to(
                            this.room, { 
                                x: 0.4,
                                y: 0.4,
                                z: 0.4,
                            });
                    
                     },

            

            //mobile
            "(max-width: 968px)": () => {
                console.log("fired mobile");
            },

            all: function() {},
          });
    }
    
    resize() {}

    update() {}
}

