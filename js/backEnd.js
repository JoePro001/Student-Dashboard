const students = [
        {
            id: 1,
            name: "Sean Mckenzie",
            email: "SeanMckenzie@email.com",
            password: "HTMLpw1",
            courses: [1000, 5000, 6000, 9000, 10000, 13000, 17000, 21000, 25000, 29000]
        },
        {
            id: 2,
            name: "Eric Ibarra",
            email: "EricIbarra@email.com",
            password: "HTMLpw2",
            courses: [1000, 5000, 6000, 9000, 10000, 13000, 17000, 21000, 25000, 29000]
        },
        {
            id: 3,
            name: "Makena Walton",
            email: "MakenaWalton@email.com",
            password: "HTMLpw3",
            courses: [1000, 5000, 6000, 9000, 10000, 13000, 17000, 21000, 25000, 29000]
        },
        {
            id: 4,
            name: "Lilliana Middleton",
            email: "LillianaMiddleton@email.com",
            password: "HTMLpw4",
            courses: [1000, 5000, 6000, 9000, 10000, 13000, 17000, 21000, 25000, 29000]
        },
        {
            id: 5,
            name: "Gustavo Fritz",
            email: "GustavoFritz@email.com",
            password: "HTMLpw5",
            courses: [1000, 5000, 6000, 9000, 10000, 13000, 17000, 21000, 25000, 29000]
        },
        {
            id: 6,
            name: "Omar Rogers",
            email: "OmarRogers@email.com",
            password: "HTMLpw6",
            courses: [1001, 5001, 6001, 9001, 10001, 13001, 17001, 21001, 25001, 29001]
        },
        {
            id: 7,
            name: "Hugh Wells",
            email: "HughWells@email.com",
            password: "HTMLpw7",
            courses: [1001, 5001, 6001, 9001, 10001, 13001, 17001, 21001, 25001, 29001]
        },
        {
            id: 8,
            name: "Taniyah Cowan",
            email: "TaniyahCowan@email.com",
            password: "HTMLpw8",
            courses: [1001, 5001, 6001, 9001, 10001, 13001, 17001, 21001, 25001, 29001]
        },
        {
            id: 9,
            name: "Celia Pineda",
            email: "CeliaPineda@email.com",
            password: "HTMLpw9",
            courses: [1001, 5001, 6001, 9001, 10001, 13001, 17001, 21001, 25001, 29001]
        },
        {
            id: 10,
            name: "Mary Goodwin",
            email: "MaryGoodwin@email.com",
            password: "HTMLpw10",
            courses: [1001, 5001, 6001, 9001, 10001, 13001, 17001, 21001, 25001, 29001]
        },
        {
            id: 11,
            name: "Aiden Cordova",
            email: "AidenCordova@email.com",
            password: "CSSpw1",
            courses: [1002, 5002, 6002, 9002, 10002, 13002, 17002, 21002, 25002, 29002]
        },
        {
            id: 12,
            name: "Zoie Morton",
            email: "ZoieMorton@email.com",
            password: "CSSpw2",
            courses: [1002, 5002, 6002, 9002, 10002, 13002, 17002, 21002, 25002, 29002]
        },
        {
            id: 13,
            name: "Rachael Carpenter",
            email: "RachaelCarpenter@email.com",
            password: "CSSpw3",
            courses: [1002, 5002, 6002, 9002, 10002, 13002, 17002, 21002, 25002, 29002]
        },
        {
            id: 14,
            name: "Nyasia Vaughan",
            email: "NyasiaVaughan@email.com",
            password: "CSSpw4",
            courses: [1002, 5002, 6002, 9002, 10002, 13002, 17002, 21002, 25002, 29002]
        },
        {
            id: 15,
            name: "Leonidas Hughes",
            email: "LeonidasHughes@email.com",
            password: "CSSpw5",
            courses: [1002, 5002, 6002, 9002, 10002, 13002, 17002, 21002, 25002, 29002]
        },
        {
            id: 16,
            name: "Emely Valencia",
            email: "EmelyValencia@email.com",
            password: "CSSpw6",
            courses: [2000, 6000, 7000, 10000, 11000, 14000, 18000, 22000, 26000, 30000]
        },
        {
            id: 17,
            name: "Felipe Nolan",
            email: "FelipeNolan@email.com",
            password: "CSSpw7",
            courses: [2000, 6000, 7000, 10000, 11000, 14000, 18000, 22000, 26000, 30000]
        },
        {
            id: 18,
            name: "Rene Harrell",
            email: "ReneHarrell@email.com",
            password: "CSSpw8",
            courses: [2000, 6000, 7000, 10000, 11000, 14000, 18000, 22000, 26000, 30000]
        },
        {
            id: 19,
            name: "Aydin Wu",
            email: "AydinWu@email.com",
            password: "CSSpw9",
            courses: [2000, 6000, 7000, 10000, 11000, 14000, 18000, 22000, 26000, 30000]
        },
        {
            id: 20,
            name: "Oswaldo Pennington",
            email: "OswaldoPennington@email.com",
            password: "CSSpw10",
            courses: [2000, 6000, 7000, 10000, 11000, 14000, 18000, 22000, 26000, 30000]
        },
        {
            id: 21,
            name: "Nyla Short",
            email: "NylaShort@email.com",
            password: "JSpw1",
            courses: [2001, 6001, 7001, 10001, 11001, 14001, 18001, 22001, 26001, 30001]
        },
        {
            id: 22,
            name: "Vicente Cherry",
            email: "VicenteCherry@email.com",
            password: "JSpw2",
            courses: [2001, 6001, 7001, 10001, 11001, 14001, 18001, 22001, 26001, 30001]
        },
        {
            id: 23,
            name: "Jaydin Dawson",
            email: "JaydinDawson@email.com",
            password: "JSpw3",
            courses: [2001, 6001, 7001, 10001, 11001, 14001, 18001, 22001, 26001, 30001]
        },
        {
            id: 24,
            name: "Jazlene Osborn",
            email: "JazleneOsborn@email.com",
            password: "JSpw4",
            courses: [2001, 6001, 7001, 10001, 11001, 14001, 18001, 22001, 26001, 30001]
        },
        {
            id: 25,
            name: "Marisa Goodman",
            email: "MarisaGoodman@email.com",
            password: "JSpw5",
            courses: [2001, 6001, 7001, 10001, 11001, 14001, 18001, 22001, 26001, 30001]
        },
        {
            id: 26,
            name: "Darryl Costa",
            email: "DarrylCosta@email.com",
            password: "JSpw6",
            courses: [2002, 6002, 7002, 10002, 11002, 14002, 18002, 22002, 26002, 30002]
        },
        {
            id: 27,
            name: "Dixie Wolfe",
            email: "DixieWolfe@email.com",
            password: "JSpw7",
            courses: [2002, 6002, 7002, 10002, 11002, 14002, 18002, 22002, 26002, 30002]
        },
        {
            id: 28,
            name: "Dominik Forbes",
            email: "DominikForbes@email.com",
            password: "JSpw8",
            courses: [2002, 6002, 7002, 10002, 11002, 14002, 18002, 22002, 26002, 30002]
        },
        {
            id: 29,
            name: "Jayce Monroe",
            email: "JayceMonroe@email.com",
            password: "JSpw9",
            courses: [2002, 6002, 7002, 10002, 11002, 14002, 18002, 22002, 26002, 30002]
        },
        {
            id: 30,
            name: "Tanner Brock",
            email: "TannerBrock@email.com",
            password: "JSpw10",
            courses: [2002, 6002, 7002, 10002, 11002, 14002, 18002, 22002, 26002, 30002]
        },
        {
            id: 31,
            name: "Cole Stevens",
            email: "ColeStevens@email.com",
            password: "BSpw1",
            courses: [3000, 4000, 7000, 8000, 11000, 12000, 15000, 19000, 23000, 27000]
        },
        {
            id: 32,
            name: "Savannah Arroyo",
            email: "SavannahArroyo@email.com",
            password: "BSpw2",
            courses: [3000, 4000, 7000, 8000, 11000, 12000, 15000, 19000, 23000, 27000]
        },
        {
            id: 33,
            name: "Enrique Dean",
            email: "EnriqueDean@email.com",
            password: "BSpw3",
            courses: [3000, 4000, 7000, 8000, 11000, 12000, 15000, 19000, 23000, 27000]
        },
        {
            id: 34,
            name: "Lillie Nicholson",
            email: "LillieNicholson@email.com",
            password: "BSpw4",
            courses: [3000, 4000, 7000, 8000, 11000, 12000, 15000, 19000, 23000, 27000]
        },
        {
            id: 35,
            name: "Rodolfo Randall",
            email: "RodolfoRandall@email.com",
            password: "BSpw5",
            courses: [3000, 4000, 7000, 8000, 11000, 12000, 15000, 19000, 23000, 27000]
        },
        {
            id: 36,
            name: "Dania Mitchell",
            email: "DaniaMitchell@email.com",
            password: "BSpw6",
            courses: [3001, 4001, 7001, 8001, 11001, 12001, 15001, 19001, 23001, 27001]
        },
        {
            id: 37,
            name: "Laura Duncan",
            email: "LauraDuncan@email.com",
            password: "BSpw7",
            courses: [3001, 4001, 7001, 8001, 11001, 12001, 15001, 19001, 23001, 27001]
        },
        {
            id: 38,
            name: "Mattie Monroe",
            email: "MattieMonroe@email.com",
            password: "BSpw8",
            courses: [3001, 4001, 7001, 8001, 11001, 12001, 15001, 19001, 23001, 27001]
        },
        {
            id: 39,
            name: "Juliette Melendez",
            email: "JulietteMelendez@email.com",
            password: "BSpw9",
            courses: [3001, 4001, 7001, 8001, 11001, 12001, 15001, 19001, 23001, 27001]
        },
        {
            id: 40,
            name: "Alexus Reilly",
            email: "AlexusReilly@email.com",
            password: "BSpw10",
            courses: [3001, 4001, 7001, 8001, 11001, 12001, 15001, 19001, 23001, 27001]
        },
        {
            id: 41,
            name: "Tia Gardner",
            email: "TiaGardner@email.com",
            password: "JSONpw1",
            courses: [3002, 4002, 7002, 8002, 11002, 12002, 15002, 19002, 23002, 27002]
        },
        {
            id: 42,
            name: "Nolan Wood",
            email: "NolanWood@email.com",
            password: "JSONpw2",
            courses: [3002, 4002, 7002, 8002, 11002, 12002, 15002, 19002, 23002, 27002]
        },
        {
            id: 43,
            name: "Emilie Bray",
            email: "EmilieBray@email.com",
            password: "JSONpw3",
            courses: [3002, 4002, 7002, 8002, 11002, 12002, 15002, 19002, 23002, 27002]
        },
        {
            id: 44,
            name: "Darien Hardy",
            email: "DarienHardy@email.com",
            password: "JSONpw4",
            courses: [3002, 4002, 7002, 8002, 11002, 12002, 15002, 19002, 23002, 27002]
        },
        {
            id: 45,
            name: "Tristin Smith",
            email: "Tristin Smith@email.com",
            password: "JSONpw5",
            courses: [3002, 4002, 7002, 8002, 11002, 12002, 15002, 19002, 23002, 27002]
        },
        {
            id: 46,
            name: "Mason Mooney",
            email: "MasonMooney@email.com",
            password: "JSONpw6",
            courses: [4000, 5000, 8000, 9000, 12000, 13000, 16000, 20000, 24000, 28000]
        },
        {
            id: 47,
            name: "Grim Reaper",
            email: "GrimReaper@email.com",
            password: "DEATH",
            courses: [4000, 5000, 8000, 9000, 12000, 13000, 16000, 20000, 24000, 28000]
        },
        {
            id: 48,
            name: "General Grievous",
            email: "GeneralGrievous@email.com",
            password: "JediScum",
            courses: [4000, 5000, 8000, 9000, 12000, 13000, 16000, 20000, 24000, 28000]
        },
        {
            id: 49,
            name: "Sound Wave",
            email: "SoundWave@email.com",
            password: "Decepticon",
            courses: [4000, 5000, 8000, 9000, 12000, 13000, 16000, 20000, 24000, 28000]
        },
        {
            id: 50,
            name: "Addison Houston",
            email: "AddisonHouston@email.com",
            password: "JSONpw7",
            courses: [4000, 5000, 8000, 9000, 12000, 13000, 16000, 20000, 24000, 28000]
        },
        {
            id: 51,
            name: "Blake Ortiz",
            email: "BlakeOrtiz@email.com",
            password: "JSONpw8",
            courses: [4001, 5001, 8001, 9001, 12001, 13001, 16001, 20001, 24001, 28001]
        },
        {
            id: 52,
            name: "Logan Eaton",
            email: "LoganEaton@email.com",
            password: "JSONpw9",
            courses: [4001, 5001, 8001, 9001, 12001, 13001, 16001, 20001, 24001, 28001]
        },
        {
            id: 53,
            name: "Liliana O’Neal",
            email: "LilianaO’Neal@email.com",
            password: "JSONpw10",
            courses: [4001, 5001, 8001, 9001, 12001, 13001, 16001, 20001, 24001, 28001]
        },
        {
            id: 54,
            name: "Westley Galindo",
            email: "WestleyGalindo@email.com",
            password: "SVCpw1",
            courses: [4001, 5001, 8001, 9001, 12001, 13001, 16001, 20001, 24001, 28001]
        },
        {
            id: 55,
            name: "Antonella Fields",
            email: "AntonellaFields@email.com",
            password: "SVCpw2",
            courses: [4001, 5001, 8001, 9001, 12001, 13001, 16001, 20001, 24001, 28001]
        },
        {
            id: 56,
            name: "Josiah Berry",
            email: "JosiahBerry@email.com",
            password: "SVCpw3",
            courses: [4002, 5002, 8002, 9002, 12002, 13002, 16002, 20002, 24002, 28002]
        },
        {
            id: 57,
            name: "Addilynn Raymond",
            email: "AddilynnRaymond@email.com",
            password: "SVCpw4",
            courses: [4002, 5002, 8002, 9002, 12002, 13002, 16002, 20002, 24002, 28002]
        },
        {
            id: 58,
            name: "Emmitt Gordon",
            email: "EmmittGordon@email.com",
            password: "SVCpw5",
            courses: [4002, 5002, 8002, 9002, 12002, 13002, 16002, 20002, 24002, 28002]
        },
        {
            id: 59,
            name: "Natalie Robbins",
            email: "NatalieRobbins@email.com",
            password: "SVCpw6",
            courses: [4002, 5002, 8002, 9002, 12002, 13002, 16002, 20002, 24002, 28002]
        },
        {
            id: 60,
            name: "Philip Browning",
            email: "PhilipBrowning@email.com",
            password: "SVCpw7",
            courses: [4002, 5002, 8002, 9002, 12002, 13002, 16002, 20002, 24002, 28002]
        }
    ];

    const courses = [
        {
            id: 1000,
            title: "HTML 101",
            description: "Introduction to HTML",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5]
        },
        {
            id: 1001,
            title: "HTML 201",
            description: "intermediate HTML",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10]
        },
        {
            id: 1002,
            title: "HTML 301",
            description: "Advanced HTML",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15]
        },
        {
            id: 2000,
            title: "CSS 101",
            description: "Introduction to CSS",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 2001,
            title: "CSS 201",
            description: "intermediate CSS",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 2002,
            title: "CSS 301",
            description: "Advanced CSS",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        },
        {
            id: 3000,
            title: "JAVASCRIPT 101",
            description: "Introduction to JAVASCRIPT",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35]
        },
        {
            id: 3001,
            title: "JAVASCRIPT 201",
            description: "intermediate JAVASCRIPT",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40]
        },
        {
            id: 3002,
            title: "JAVASCRIPT 301",
            description: "Advanced JAVASCRIPT",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45]
        },
        {
            id: 4000,
            title: "SWIFT 101",
            description: "Introduction to SWIFT",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35,46, 47, 48, 49, 50]
        },
        {
            id: 4001,
            title: "SWIFT 201",
            description: "intermediate SWIFT",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40, 51, 52, 53, 54, 55]
        },
        {
            id: 4002,
            title: "SWIFT 301",
            description: "Advanced SWIFT",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45, 56, 57, 58, 59, 60 ]
        },
        {
            id: 5000,
            title: "PYTHON 101",
            description: "Introduction to PYTHON",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5, 46, 47, 48, 49, 50]
        },
        {
            id: 5001,
            title: "PYTHON 201",
            description: "intermediate PYTHON",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10, 51, 52, 53, 54, 55]
        },
        {
            id: 5002,
            title: "PYTHON 301",
            description: "Advanced PYTHON",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15, 56, 57, 58, 59, 60]
        },
        {
            id: 6000,
            title: "JAVA 101",
            description: "Introduction to JAVA",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5, 16, 17, 18, 19, 20]
        },
        {
            id: 6001,
            title: "JAVA 201",
            description: "intermediate JAVA",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10, 21, 22, 23, 24, 25]
        },
        {
            id: 6002,
            title: "JAVA 301",
            description: "Advanced JAVA",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15, 26, 27, 28, 29, 30]
        },
        {
            id: 7000,
            title: "PHP 101",
            description: "Introduction to PHP",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20, 31, 32, 33, 34, 35]
        },
        {
            id: 7001,
            title: "PHP 201",
            description: "intermediate PHP",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25, 36, 37, 38, 39, 40]
        },
        {
            id: 7002,
            title: "PHP 301",
            description: "Advanced PHP",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30, 41, 42, 43, 44, 45]
        },
        {
            id: 8000,
            title: "C 101",
            description: "Introduction to C",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35, 46, 47, 48, 49, 50]
        },
        {
            id: 8001,
            title: "C 201",
            description: "intermediate C",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40, 51, 52, 53, 54, 55]
        },
        {
            id: 8002,
            title: "C 301",
            description: "Advanced C",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45, 56, 57, 58, 59, 60]
        },
        {
            id: 9000,
            title: "C++ 101",
            description: "Introduction to C++",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5, 46, 47, 48, 49, 50]
        },
        {
            id: 9001,
            title: "C++ 201",
            description: "intermediate C++",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10, 51, 52, 53, 54, 55]
        },
        {
            id: 9002,
            title: "C++ 301",
            description: "Advanced C++",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15, 56, 57, 58, 59, 60]
        },
        {
            id: 10000,
            title: "C# 101",
            description: "Introduction to C#",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5, 16, 17, 18, 19, 20]
        },
        {
            id: 10001,
            title: "C# 201",
            description: "intermediate C#",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10, 21, 22, 23, 24, 25]
        },
        {
            id: 10002,
            title: "C# 301",
            description: "Advanced C#",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15, 26, 27, 28, 29, 30]
        },
        {
            id: 11000,
            title: "GOLANG 101",
            description: "Introduction to GOLANG",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20, 31, 32, 33, 34, 35]
        },
        {
            id: 11001,
            title: "GOLANG 201",
            description: "intermediate GOLANG",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25, 36, 37, 38, 39, 40]
        },
        {
            id: 11002,
            title: "GOLANG 301",
            description: "Advanced GOLANG",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30, 41, 42, 43, 44, 45]
        },
        {
            id: 12000,
            title: "R 101",
            description: "Introduction to R",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35, 46, 47, 48, 49, 50]
        },
        {
            id: 12001,
            title: "R 201",
            description: "intermediate R",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40, 51, 52, 53, 54, 55]
        },
        {
            id: 12002,
            title: "R 301",
            description: "Advanced R",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45, 56, 57, 58, 59, 60]
        },
        {
            id: 13000,
            title: "TYPESCRIPT 101",
            description: "Introduction to TYPESCRIPT",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5, 46, 47, 48, 49, 50]
        },
        {
            id: 13001,
            title: "TYPESCRIPT 201",
            description: "intermediate TYPESCRIPT",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10, 51, 52, 53, 54, 55]
        },
        {
            id: 13002,
            title: "TYPESCRIPT 301",
            description: "Advanced TYPESCRIPT",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15, 56, 57, 58, 59, 60]
        },
        {
            id: 14000,
            title: "SCALA 101",
            description: "Introduction to SCALA",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 14001,
            title: "SCALA 201",
            description: "intermediate SCALA",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 14002,
            title: "SCALA 301",
            description: "Advanced SCALA",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        },
        {
            id: 15000,
            title: "SHELL 101",
            description: "Introduction to SHELL",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35]
        },
        {
            id: 15001,
            title: "SHELL 201",
            description: "intermediate SHELL",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40]
        },
        {
            id: 15002,
            title: "SHELL 301",
            description: "Advanced SHELL",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45]
        },
        {
            id: 16000,
            title: "POWERSHELL 101",
            description: "Introduction to POWERSHELL",
            availableSlots: 10,
            registeredStudents: [46, 47, 48, 49, 50]
        },
        {
            id: 16001,
            title: "POWERSHELL 201",
            description: "intermediate POWERSHELL",
            availableSlots: 10,
            registeredStudents: [51, 52, 53, 54, 55]
        },
        {
            id: 16002,
            title: "POWERSHELL 301",
            description: "Advanced POWERSHELL",
            availableSlots: 10,
            registeredStudents: [56, 57, 58, 59, 60]
        },
        {
            id: 17000,
            title: "PERL 101",
            description: "Introduction to PERL",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5]
        },
        {
            id: 17001,
            title: "PERL 201",
            description: "intermediate PERL",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10]
        },
        {
            id: 17002,
            title: "PERL 301",
            description: "Advanced PERL",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15]
        },
        {
            id: 18000,
            title: "HASKELL 101",
            description: "Introduction to HASKELL",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 18001,
            title: "HASKELL 201",
            description: "intermediate HASKELL",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 18002,
            title: "HASKELL 301",
            description: "Advanced HASKELL",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        },
        {
            id: 19000,
            title: "KOTLIN 101",
            description: "Introduction to KOTLIN",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35]
        },
        {
            id: 19001,
            title: "KOTLIN 201",
            description: "intermediate KOTLIN",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40]
        },
        {
            id: 19002,
            title: "KOTLIN 301",
            description: "Advanced KOTLIN",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45]
        },
        {
            id: 20000,
            title: "VISUAL BASIC.NET 101",
            description: "Introduction to VISUAL BASIC .NET",
            availableSlots: 10,
            registeredStudents: [46, 47, 48, 49, 50]
        },
        {
            id: 20001,
            title: "VISUAL BASIC.NET 201",
            description: "intermediate VISUAL BASIC .NET",
            availableSlots: 10,
            registeredStudents: [51, 52, 53, 54, 55]
        },
        {
            id: 20002,
            title: "VISUAL BASIC.NET 301",
            description: "Advanced VISUAL BASIC .NET",
            availableSlots: 10,
            registeredStudents: [56, 57, 58, 59, 60]
        },
        {
            id: 21000,
            title: "SQL 101",
            description: "Introduction to SQL",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5]
        },
        {
            id: 21001,
            title: "SQL 201",
            description: "intermediate SQL",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10]
        },
        {
            id: 21002,
            title: "SQL 301",
            description: "Advanced SQL",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15]
        },
        {
            id: 22000,
            title: "DELPHI 101",
            description: "Introduction to DELPHI",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 22001,
            title: "DELPHI 201",
            description: "intermediate DELPHI",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 22002,
            title: "DELPHI 301",
            description: "Advanced DELPHI",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        },
        {
            id: 23000,
            title: "MATLAB 101",
            description: "Introduction to MATLAB",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35]
        },
        {
            id: 23001,
            title: "MATLAB 201",
            description: "intermediate MATLAB",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40]
        },
        {
            id: 23002,
            title: "MATLAB 301",
            description: "Advanced MATLAB",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45]
        },
        {
            id: 24000,
            title: "GROOVY 101",
            description: "Introduction to GROOVY",
            availableSlots: 10,
            registeredStudents: [46, 47, 48, 49, 50]
        },
        {
            id: 24001,
            title: "GROOVY 201",
            description: "intermediate GROOVY",
            availableSlots: 10,
            registeredStudents: [51, 52, 53, 54, 55]
        },
        {
            id: 24002,
            title: "GROOVY 301",
            description: "Advanced GROOVY",
            availableSlots: 10,
            registeredStudents: [56, 57, 58, 59, 60]
        },
        {
            id: 25000,
            title: "LUA 101",
            description: "Introduction to LUA",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5]
        },
        {
            id: 25001,
            title: "LUA 201",
            description: "intermediate LUA",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10]
        },
        {
            id: 25002,
            title: "LUA 301",
            description: "Advanced LUA",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15]
        },
        {
            id: 26000,
            title: "RUST 101",
            description: "Introduction to RUST",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 26001,
            title: "RUST 201",
            description: "intermediate RUST",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 26002,
            title: "RUST 301",
            description: "Advanced RUST",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        },
        {
            id: 27000,
            title: "RUBY 101",
            description: "Introduction to RUBY",
            availableSlots: 10,
            registeredStudents: [31, 32, 33, 34, 35]
        },
        {
            id: 27001,
            title: "RUBY 201",
            description: "intermediate RUBY",
            availableSlots: 10,
            registeredStudents: [36, 37, 38, 39, 40]
        },
        {
            id: 27002,
            title: "RUBY 301",
            description: "Advanced RUBY",
            availableSlots: 10,
            registeredStudents: [41, 42, 43, 44, 45]
        },
        {
            id: 28000,
            title: "DART 101",
            description: "Introduction to DART",
            availableSlots: 10,
            registeredStudents: [46, 47, 48, 49, 50]
        },
        {
            id: 28001,
            title: "DART 201",
            description: "intermediate DART",
            availableSlots: 10,
            registeredStudents: [51, 52, 53, 54, 55]
        },
        {
            id: 28002,
            title: "DART 301",
            description: "Advanced DART",
            availableSlots: 10,
            registeredStudents: [56, 57, 58, 59, 60]
        },
        {
            id: 29000,
            title: "DM 101",
            description: "Introduction to DM",
            availableSlots: 10,
            registeredStudents: [1, 2, 3, 4, 5]
        },
        {
            id: 29001,
            title: "DM 201",
            description: "intermediate DM",
            availableSlots: 10,
            registeredStudents: [6, 7, 8, 9, 10]
        },
        {
            id: 29002,
            title: "DM 301",
            description: "Advanced DM",
            availableSlots: 10,
            registeredStudents: [11, 12, 13, 14, 15]
        },
        {
            id: 30000,
            title: "MYSQL 101",
            description: "Introduction to MYSQL",
            availableSlots: 10,
            registeredStudents: [16, 17, 18, 19, 20]
        },
        {
            id: 30001,
            title: "MYSQL 201",
            description: "intermediate MYSQL",
            availableSlots: 10,
            registeredStudents: [21, 22, 23, 24, 25]
        },
        {
            id: 30002,
            title: "MYSQL 301",
            description: "Advanced MYSQL",
            availableSlots: 10,
            registeredStudents: [26, 27, 28, 29, 30]
        }
    ]
