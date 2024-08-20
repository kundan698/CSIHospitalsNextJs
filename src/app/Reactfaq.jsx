"use client"
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
   
    rows: [
        {
            title: "Proctology",
            content: ` urology  <br/> Piles <br/> Fistula <br/> Herenia`,
            
        },
        {
            title: "Orthology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
            
               
               
        },
        {
            title: "Cosmeticy Gyeneology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Recunstrutive Urology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Andrology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Dental implants & Orthodontics",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Cosmetic & Plastic Surgery",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Obstrics & Gynology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Weight Loss Surgery",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Internal medicine & Endocronology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Health Checkup",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Opthalmology",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
        {
            title: "Mother & child Care",
            content:'Hand & Nerve <br/> Orthopaedic Treatment <br/> Paediatric & Orthopadic',
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function ReactFaq () {

    return (
        <div className="text-black">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
