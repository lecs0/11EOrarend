
const timetable = {

    hetfo: [

        // 1. óra
        {
            csoportok: [
                {
                    tantargy: "Matematika",
                    tanar: "KJ",
                    terem: "201",
                    csoport: "11E"
                }
            ]
        },

        // 2. óra
        {
            csoportok: [
                {
                    tantargy: "Programozás",
                    tanar: "SZT",
                    terem: "312",
                    csoport: "11E/1"
                },
                {
                    tantargy: "Programozás",
                    tanar: "AB",
                    terem: "313",
                    csoport: "11E/2"
                }
            ]
        },

        // 3. óra
        {
            csoportok: [
                {
                    tantargy: "Angol",
                    tanar: "NP",
                    terem: "105",
                    csoport: "11E/1"
                },
                {
                    tantargy: "Angol",
                    tanar: "XY",
                    terem: "106",
                    csoport: "11E/2"
                }
            ]
        },

        // 4. óra
        {
            csoportok: [
                {
                    tantargy: "Történelem",
                    tanar: "BK",
                    terem: "204",
                    csoport: "11E"
                }
            ]
        },

        // 5. óra
        {
            csoportok: [
                {
                    tantargy: "Fizika",
                    tanar: "VN",
                    terem: "110",
                    csoport: "11E"
                }
            ]
        },

        // 6. óra
        {
            csoportok: [
                {
                    tantargy: "Testnevelés",
                    tanar: "PT",
                    terem: "Tornaterem",
                    csoport: "11E"
                }
            ]
        }

    ],


    kedd: [

        {
            csoportok: [
                {
                    tantargy: "Magyar",
                    tanar: "KS",
                    terem: "203",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Matematika",
                    tanar: "KJ",
                    terem: "201",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Angol",
                    tanar: "NP",
                    terem: "105",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Programozás",
                    tanar: "SZT",
                    terem: "312",
                    csoport: "11E/1"
                },
                {
                    tantargy: "Programozás",
                    tanar: "AB",
                    terem: "313",
                    csoport: "11E/2"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Testnevelés",
                    tanar: "PT",
                    terem: "Tornaterem",
                    csoport: "11E"
                }
            ]
        }

    ],


    szerda: [

        {
            csoportok: [
                {
                    tantargy: "Programozás",
                    tanar: "SZT",
                    terem: "312",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Fizika",
                    tanar: "VN",
                    terem: "110",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Matematika",
                    tanar: "KJ",
                    terem: "201",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Angol",
                    tanar: "NP",
                    terem: "105",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Magyar",
                    tanar: "KS",
                    terem: "203",
                    csoport: "11E"
                }
            ]
        }

    ],


    csutortok: [

        {
            csoportok: [
                {
                    tantargy: "Történelem",
                    tanar: "BK",
                    terem: "204",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Programozás",
                    tanar: "SZT",
                    terem: "312",
                    csoport: "11E/1"
                },
                {
                    tantargy: "Programozás",
                    tanar: "AB",
                    terem: "313",
                    csoport: "11E/2"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Matematika",
                    tanar: "KJ",
                    terem: "201",
                    csoport: "11E"
                }
            ]
        }

    ],


    pentek: [

        {
            csoportok: [
                {
                    tantargy: "Fizika",
                    tanar: "VN",
                    terem: "110",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Testnevelés",
                    tanar: "PT",
                    terem: "Tornaterem",
                    csoport: "11E"
                }
            ]
        },

        {
            csoportok: [
                {
                    tantargy: "Programozás",
                    tanar: "SZT",
                    terem: "312",
                    csoport: "11E/1"
                },
                {
                    tantargy: "Programozás",
                    tanar: "AB",
                    terem: "313",
                    csoport: "11E/2"
                },
                {
                    tantargy: "Programozás",
                    tanar: "CD",
                    terem: "314",
                    csoport: "11E/3"
                }
            ]
        }

    ]

};


// HTML táblázat
const table = document.getElementById("orak");


// Napok sorrendje
const napok = [
    "hetfo",
    "kedd",
    "szerda",
    "csutortok",
    "pentek"
];


// Magyar napnevek
const napNevek = {
    hetfo: "Hétfő",
    kedd: "Kedd",
    szerda: "Szerda",
    csutortok: "Csütörtök",
    pentek: "Péntek"
};


// Hány óra van a legtöbb napon?
const maxOrak = Math.max(
    ...napok.map(nap => timetable[nap]?.length || 0)
);


// Órák létrehozása
for (let ora = 0; ora < maxOrak; ora++) {

    const row = document.createElement("tr");


    // Óra száma
    const lessonNumber = document.createElement("th");

    lessonNumber.textContent = `${ora + 1}.`;

    lessonNumber.classList.add("lesson-number");

    row.appendChild(lessonNumber);


    // Napok
    napok.forEach(nap => {

        const cell = document.createElement("td");

        const oraAdat = timetable[nap]?.[ora];


        // Ha nincs óra
        if (!oraAdat) {

            cell.classList.add("empty");

            row.appendChild(cell);

            return;
        }


        // Csoportok
        const groups = document.createElement("div");

        groups.classList.add("groups");


        oraAdat.csoportok.forEach(csoport => {

            const group = document.createElement("div");

            group.classList.add("group");


            group.innerHTML = `
                <strong class="subject">
                    ${csoport.tantargy}
                </strong>

                <div class="group-info">

                    <small>
                        ${csoport.tanar}
                    </small>

                    <small>
                        ${csoport.terem}
                    </small>

                </div>

                <small class="group-name">
                    ${csoport.csoport}
                </small>
            `;


            groups.appendChild(group);

        });


        cell.appendChild(groups);

        row.appendChild(cell);

    });


    table.appendChild(row);
}

