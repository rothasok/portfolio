// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
    en: {
        home: 'Home',
        kh: 'KH',
        about: 'About',
        blog: 'Blog',
        portfolio: 'Portfolio',
        contact: 'Contact',

        "hello it's me": "Hello, it's me",
        "rotha sok": 'Rotha Sok',
        "and i am": "And I am",
        'designer': "Designer, Frontend, and Backend",
        "i am a multidisciplinary": "I'm a multidisciplinary professional with a passion for both creative design and technical development. My expertise spans across UI/UX design, frontend development, and backend development, allowing me to build seamless, visually captivating, and highly functional digital experiences. With a strong foundation in design, I transform ideas into visually engaging layouts, while my technical skills in HTML, CSS, JavaScript, and frameworks like Bootstrap and Vue.js help bring those designs to life on the web. Additionally, my backend development experience ensures efficient and scalable systems, integrating databases like MySQL and implementing project management strategies that streamline workflows. I'm always looking for new challenges that allow me to combine creativity with technology, pushing the boundaries of what’s possible in digital solutions.",
        "my profession":"my Profession",
        "professional desc":"a professional who designs, develops, tests, and maintains software applications.",
        "highlighting the skills":"highlighting the skills",
        "achievements":"achievements",
        "education":"education",
        "skill desc":"My technical skills include proficiency in Microsoft products (VB.NET, C#, SQL Server), web development (HTML, CSS, JavaScript, Bootstrap, Vue.js), database management (MySQL), and project management. I'm also skilled in creating user-friendly interfaces through UI/UX design.lastly, i've engaged myself in ICT policy.",
        "achievement desc":"My achievements include the development of the MPTC HRMIS, Senate-Staff Management System (WinForm), MAFF-HRMIS (WinForm), MOI-Sub-National Administrative Councils Management Information System, Attendant System, and HRMIS-Mobile App.",
        "edcuation desc":"Experienced ICT professional with a strong foundation in computer science and engineering. Possessing a Master's degree in ICT Techno Policy from Soongsil University, Korea, with a thesis on E-participation initiatives in Cambodia. Proven track record in project management, software development, and information security. Skilled in utilizing ICT services and applications, with expertise in big data analytics. Committed to driving technological advancements and contributing to the development of the ICT sector.",
        "latest work":"Some of my latest Works",
        "mptc hrmis":"MPTC-HRMIS",
        "mptc hrmis desc":"The MPTC-HRMIS (Human Resource Management Information System) is a national HR management platform designed for the Ministry of Post and Telecommunications in Cambodia. It provides a centralized system for managing human resource information, accessible via both client-server technology and the internet. The system streamlines operational HR tasks such as managing employee records, payroll, and administrative workflows. It supports functions like tracking employee information, managing attendance, and facilitating HR reporting, which can be accessed through mobile applications available on both Android and iOS platforms. This system enhances accessibility and efficiency for HR departments and employees, reducing reliance on paper-based processes and allowing better data accuracy and confidentiality through digital platforms. Regular updates improve its functionality and address minor issues, ensuring consistent service.",
        "mobile app":"Mobile App",
        "mobile app desc":"The MPTC HRMIS Mobile App streamlines HR processes by providing employees with secure access to personal information, payroll details, and leave management. It uses face recognition for accurate attendance tracking and offers an HR dashboard for key updates. The app supports performance evaluations, enabling supervisors to monitor employee progress, while HR staff can manage records and attendance remotely. With multi-factor authentication, it ensures data security and is available in both Khmer and English. The app reduces reliance on manual processes, creating a more efficient and digitalized HR system.",
        "moi-sacmis":"MOI-SACMIS",
        "moi-sacmis desc":"The Sub-National Administrative Councils Management Information System (SACMIS), developed by the Ministry of Post and Telecommunications (MPTC) for the Ministry of Interior, is a comprehensive platform designed to enhance the management and operations of sub-national councils. It streamlines administrative tasks such as data management, reporting, and budgeting, ensuring efficient governance at the local level. The system allows for better coordination between provincial, municipal, and district councils, providing real-time data access and improving decision-making. With user-friendly interfaces and secure data handling, SACMIS promotes transparency and accountability within sub-national administrative bodies. This system fosters more efficient and effective public administration across Cambodia's local governments.",
        "address":"Address",
        "info":"Info",
        "info desc":"With a focus on software development, we aim to deliver exceptional results that help you achieve your goals. Our experienced team combines cutting-edge technology with industry expertise to ensure that every project is handled with the utmost care and precision.",
        "link":"Links",
        "subscribe":"Subscribe",
        "enter email":"Enter email",
    },

    khm: {
        home: 'ទំព័រដើម',
        kh: 'EN',
        about: 'អំពីខ្ញុំ',
        blog: 'ប្លុក',
        portfolio: 'កាបូបស្នាដៃ',
        contact: 'ទំនាក់ទំនង',
        "hello it's me": 'សួស្តី! ខ្ញុំគឺ',
        "rotha sok": 'សុខ​ រដ្ឋា',
        "and i am": "ហើយខ្ញុំជា",
        'designer': "អ្នករចនា អ្នកអភិវឌ្ឍន៍ផ្នែកខាងមុខ និងផ្នែកខាងក្រោយ",
        "i am a multidisciplinary": "ខ្ញុំ​ជា​អ្នក​ជំនាញ​ពហុ​ជំនាញ​ដែល​មាន​ចំណង់​ចំណូល​ចិត្ត​ទាំង​ការ​រចនា​ច្នៃប្រឌិត និង​ការ​អភិវឌ្ឍ​បច្ចេកទេស។ ជំនាញរបស់ខ្ញុំលាតសន្ធឹងលើការរចនា UI/UX ការអភិវឌ្ឍន៍ផ្នែកខាងមុខ និងការអភិវឌ្ឍន៍ផ្នែកខាងក្រោយ ដែលអនុញ្ញាតឱ្យខ្ញុំបង្កើតបទពិសោធន៍ឌីជីថលប្រកបដោយភាពទាក់ទាញ គួរឱ្យចាប់អារម្មណ៍ និងមុខងារខ្ពស់។ ជាមួយនឹងមូលដ្ឋានគ្រឹះដ៏រឹងមាំក្នុងការរចនា ខ្ញុំបានបំប្លែងគំនិតទៅជាប្លង់ដែលមើលឃើញ ខណៈពេលដែលជំនាញបច្ចេកទេសរបស់ខ្ញុំនៅក្នុង HTML, CSS, JavaScript និងក្របខ័ណ្ឌដូចជា Bootstrap និង Vue.js ជួយនាំយកការរចនាទាំងនោះមកជីវិតនៅលើបណ្តាញ។ លើសពីនេះ បទពិសោធន៍អភិវឌ្ឍន៍ផ្នែកខាងក្រោយរបស់ខ្ញុំធានាបាននូវប្រព័ន្ធដែលមានប្រសិទ្ធភាព និងអាចធ្វើមាត្រដ្ឋានបាន ដោយរួមបញ្ចូលមូលដ្ឋានទិន្នន័យដូចជា MySQL និងការអនុវត្តយុទ្ធសាស្ត្រគ្រប់គ្រងគម្រោងដែលសម្រួលលំហូរការងារ។ ខ្ញុំតែងតែស្វែងរកបញ្ហាប្រឈមថ្មីៗដែលអនុញ្ញាតឱ្យខ្ញុំបញ្ចូលគ្នានូវភាពច្នៃប្រឌិតជាមួយនឹងបច្ចេកវិទ្យា ដោយជំរុញឱ្យមានព្រំដែននៃអ្វីដែលអាចធ្វើទៅបាននៅក្នុងដំណោះស្រាយឌីជីថល។",
        "my profession":"អាជីពរបស់ខ្ញុំ",
        "professional desc":"ជាអ្នកជំនាញដែលរចនា បង្កើត ប្រើសាកល្បង និងថែទាំប្រព័ន្ធកម្មវិធី។",
        "highlighting the skills":"ជំនាញសំខាន់ខ្លះៗ",
        "achievements":"ស្នាដៃ",
        "education":"ការសិក្សា",
        "skill desc":"ជំនាញបច្ចេកទេសរបស់ខ្ញុំរួមមានជំនាញក្នុងផលិតផល Microsoft (VB.NET, C#, SQL Server), ការអភិវឌ្ឍន៍គេហទំព័រ (HTML, CSS, JavaScript, Bootstrap, Vue.js) ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ (MySQL) និងការគ្រប់គ្រងគម្រោង។ ខ្ញុំក៏មានជំនាញក្នុងការបង្កើតចំណុចប្រទាក់ដែលងាយស្រួលប្រើតាមរយៈការរចនា UI/UX។ ជាចុងក្រោយ ខ្ញុំបានចូលរួមក្នុងគោលនយោបាយ ICT ។",
        "achievement desc":"សមិទ្ធិផលរបស់ខ្ញុំរួមមានការអភិវឌ្ឍន៍ HRMIS របស់ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិកព្រឹទ្ធសភា (WinForm) ប្រព័ន្ធគ្រប់គ្រងទន្និន័យក្រសួងកសិសកម្ម (WinForm) ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងក្រុមប្រឹក្សារដ្ឋបាលថ្នាក់ក្រោមជាតិ MOI-Sub-National Adtendant System និង HRMIS-Mobile App ។",
        "edcuation desc":"អ្នកជំនាញ ICT ដែលមានបទពិសោធន៍ជាមួយនឹងមូលដ្ឋានគ្រឹះដ៏រឹងមាំក្នុងវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្ម។ មានបរិញ្ញាបត្រជាន់ខ្ពស់ផ្នែក ICT Techno Policy ពីសាកលវិទ្យាល័យ Soongsil ប្រទេសកូរ៉េ ជាមួយនឹងនិក្ខេបបទស្តីពីគំនិតផ្តួចផ្តើម E-participation នៅកម្ពុជា។ កំណត់ត្រាបទបង្ហាញក្នុងការគ្រប់គ្រងគម្រោង ការអភិវឌ្ឍន៍កម្មវិធី និងសុវត្ថិភាពព័ត៌មាន។ មានជំនាញក្នុងការប្រើប្រាស់សេវាកម្ម និងកម្មវិធី ICT ជាមួយនឹងជំនាញក្នុងការវិភាគទិន្នន័យធំ។ ប្ដេជ្ញា​ចិត្ត​ជំរុញ​ការ​រីក​ចម្រើន​ផ្នែក​បច្ចេកវិទ្យា និង​ចូល​រួម​ចំណែក​ក្នុង​ការ​អភិវឌ្ឍ​វិស័យ ICT",
        "latest work":"ការងារចុងក្រោយខ្លះៗ",
        "mptc hrmis":"ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិកក្រសួង ប.ទ",
        "mptc hrmis desc":"ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងធនធានមនុស្ស គឺជា platform គ្រប់គ្រងធនធានមនុស្សជាតិដែលត្រូវបានរចនាឡើងសម្រាប់ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍នៅកម្ពុជា។ វាផ្តល់នូវប្រព័ន្ធកណ្តាលសម្រាប់គ្រប់គ្រងព័ត៌មានធនធានមនុស្សដែលអាចចូលដំណើរការបានតាមរយៈបច្ចេកវិទ្យាម៉ាស៊ីនភ្ញៀវ និងអ៊ីនធឺណិត។ ប្រព័ន្ធនេះជួយសម្រួលដល់កិច្ចការធនធានមនុស្សក្នុងប្រតិបត្តិការដូចជា ការគ្រប់គ្រងកំណត់ត្រាបុគ្គលិក បញ្ជីប្រាក់ខែ និងលំហូរការងាររដ្ឋបាល។ វាគាំទ្រមុខងារដូចជាការតាមដានព័ត៌មានបុគ្គលិក ការគ្រប់គ្រងការចូលរួម និងការសម្របសម្រួលការរាយការណ៍ធនធានមនុស្ស ដែលអាចចូលប្រើបានតាមរយៈកម្មវិធីទូរស័ព្ទដែលមានទាំងប្រព័ន្ធប្រតិបត្តិការ Android និង iOS ។ ប្រព័ន្ធនេះបង្កើនភាពងាយស្រួល និងប្រសិទ្ធភាពសម្រាប់នាយកដ្ឋានធនធានមនុស្ស និងនិយោជិត ដោយកាត់បន្ថយការពឹងផ្អែកលើដំណើរការផ្អែកលើក្រដាស និងអនុញ្ញាតឱ្យមានភាពត្រឹមត្រូវ និងរក្សាការសម្ងាត់ទិន្នន័យកាន់តែប្រសើរឡើងតាមរយៈវេទិកាឌីជីថល។ ការអាប់ដេតជាទៀងទាត់ធ្វើអោយមុខងាររបស់វាប្រសើរឡើង និងដោះស្រាយបញ្ហាតូចតាច ដោយធានាបាននូវសេវាកម្មជាប់លាប់។",
        "mobile app":"កម្មវិធីទូរស័ព្ទ",
        "mobile app desc":"កម្មវិធីទូរស័ព្ទ MPTC HRMIS សម្រួលដំណើរការធនធានមនុស្សដោយផ្តល់ឱ្យនិយោជិតនូវការចូលប្រើប្រាស់ប្រកបដោយសុវត្ថិភាពនូវព័ត៌មានផ្ទាល់ខ្លួន ព័ត៌មានលម្អិតអំពីប្រាក់ខែ និងការគ្រប់គ្រងការចាកចេញ។ វាប្រើការសម្គាល់មុខសម្រាប់ការតាមដានវត្តមានត្រឹមត្រូវ និងផ្តល់នូវផ្ទាំងគ្រប់គ្រងធនធានមនុស្សសម្រាប់ការធ្វើបច្ចុប្បន្នភាពសំខាន់ៗ។ កម្មវិធីនេះគាំទ្រការវាយតម្លៃការអនុវត្ត ដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងត្រួតពិនិត្យវឌ្ឍនភាពរបស់បុគ្គលិក ខណៈដែលបុគ្គលិកធនធានមនុស្សអាចគ្រប់គ្រងកំណត់ត្រា និងការចូលរួមពីចម្ងាយ។ ជាមួយនឹងការផ្ទៀងផ្ទាត់ពហុកត្តា វាធានាសុវត្ថិភាពទិន្នន័យ និងមានជាភាសាខ្មែរ និងភាសាអង់គ្លេស។ កម្មវិធីនេះកាត់បន្ថយការពឹងផ្អែកលើដំណើរការដោយដៃ បង្កើតប្រព័ន្ធធនធានមនុស្សប្រកបដោយប្រសិទ្ធភាព និងឌីជីថលកាន់តែច្រើន។",
        "moi-sacmis":"ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងក្រុមប្រឹក្សារដ្ឋបាលថ្នាក់ក្រោមជាតិ",
        "moi-sacmis desc":"ប្រព័ន្ធព័ត៌មានគ្រប់គ្រងក្រុមប្រឹក្សារដ្ឋបាលថ្នាក់ក្រោមជាតិ (SACMIS) ដែលបង្កើតឡើងដោយក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ (MPTC) សម្រាប់ក្រសួងមហាផ្ទៃ គឺជាវេទិកាដ៏ទូលំទូលាយមួយដែលត្រូវបានបង្កើតឡើងដើម្បីបង្កើនការគ្រប់គ្រង និងប្រតិបត្តិការរបស់ក្រុមប្រឹក្សាថ្នាក់ក្រោមជាតិ។ វាសម្រួលដល់ការងាររដ្ឋបាលដូចជា ការគ្រប់គ្រងទិន្នន័យ ការរាយការណ៍ និងថវិកា ធានានូវអភិបាលកិច្ចប្រកបដោយប្រសិទ្ធភាពនៅថ្នាក់មូលដ្ឋាន។ ប្រព័ន្ធនេះអនុញ្ញាតឱ្យមានការសម្របសម្រួលកាន់តែប្រសើរឡើងរវាងក្រុមប្រឹក្សាខេត្ត ក្រុង និងស្រុក ដោយផ្តល់នូវការចូលប្រើប្រាស់ទិន្នន័យក្នុងពេលវេលាជាក់ស្តែង និងការកែលម្អការសម្រេចចិត្ត។ ជាមួយនឹងចំណុចប្រទាក់ងាយស្រួលប្រើ និងការគ្រប់គ្រងទិន្នន័យប្រកបដោយសុវត្ថិភាព SACMIS លើកកម្ពស់តម្លាភាព និងគណនេយ្យភាពនៅក្នុងស្ថាប័នរដ្ឋបាលថ្នាក់ក្រោមជាតិ។ ប្រព័ន្ធនេះជំរុញការគ្រប់គ្រងសាធារណៈឱ្យកាន់តែមានប្រសិទ្ធភាព និងមានប្រសិទ្ធភាពនៅទូទាំងរដ្ឋាភិបាលមូលដ្ឋានរបស់កម្ពុជា។",
        "address":"អាសយដ្ឋាន",
        "info":"ព័ត៌មាន",
        "info desc":"ដោយផ្តោតលើការអភិវឌ្ឍន៍កម្មវិធី យើងមានបំណងផ្តល់នូវលទ្ធផលពិសេសដែលជួយអ្នកឱ្យសម្រេចបាននូវគោលដៅរបស់អ្នក។ ក្រុមដែលមានបទពិសោធន៍របស់យើងរួមបញ្ចូលគ្នានូវបច្ចេកវិជ្ជាទំនើបចុងក្រោយជាមួយនឹងអ្នកជំនាញក្នុងឧស្សាហកម្ម ដើម្បីធានាថារាល់គម្រោងទាំងអស់ត្រូវបានគ្រប់គ្រងដោយយកចិត្តទុកដាក់បំផុត និងភាពច្បាស់លាស់បំផុត។",
        "link":"តំណភ្ជាប់",
        "subscribe":"ជាវ",
        "enter email":"អ៊ីម៉ែល",
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n