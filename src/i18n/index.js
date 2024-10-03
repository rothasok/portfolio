// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
    en: {
        home: 'Home',
        kh: 'KH',
        about: 'About',
        skills: 'Skills',
        portfolio: 'Portfolio',
        contact: 'Contact',

        "hello it's me": "Hello, it's me",
        "rotha sok": 'Rotha Sok',
        "and i am": "And I am",
        'designer': "Designer, Frontend,​ and Backend",
        "i am a multidisciplinary": "I’m a multidisciplinary professional with a passion for both creative design and technical development. My expertise spans across UI/UX design, frontend development, and backend development, allowing me to build seamless, visually captivating, and highly functional digital experiences. With a strong foundation in design, I transform ideas into visually engaging layouts, while my technical skills in HTML, CSS, JavaScript, and frameworks like Bootstrap and Vue.js help bring those designs to life on the web. Additionally, my backend development experience ensures efficient and scalable systems, integrating databases like MySQL and implementing project management strategies that streamline workflows. I'm always looking for new challenges that allow me to combine creativity with technology, pushing the boundaries of what’s possible in digital solutions."
    },

    khm: {
        home: 'ទំព័រដើម',
        kh: 'EN',
        about: 'អំពីយើង',
        skills: 'ជំនាញ',
        portfolio: 'កាបូបស្នាដៃ',
        contact: 'ទំនាក់ទំនង',
        "hello it's me": 'សួស្តី! ខ្ញុំគឺ',
        "rotha sok": 'សុខ​ រដ្ឋា',
        "and i am": "ហើយខ្ញុំជា",
        'designer': "អ្នករចនា អ្នកអភិវឌ្ឍន៍ផ្នែកខាងមុខ និងផ្នែកខាងក្រោយ",
        "i am a multidisciplinary": "ខ្ញុំ​ជា​អ្នក​ជំនាញ​ពហុ​ជំនាញ​ដែល​មាន​ចំណង់​ចំណូល​ចិត្ត​ទាំង​ការ​រចនា​ច្នៃប្រឌិត និង​ការ​អភិវឌ្ឍ​បច្ចេកទេស។ ជំនាញរបស់ខ្ញុំលាតសន្ធឹងលើការរចនា UI/UX ការអភិវឌ្ឍន៍ផ្នែកខាងមុខ និងការអភិវឌ្ឍន៍ផ្នែកខាងក្រោយ ដែលអនុញ្ញាតឱ្យខ្ញុំបង្កើតបទពិសោធន៍ឌីជីថលប្រកបដោយភាពទាក់ទាញ គួរឱ្យចាប់អារម្មណ៍ និងមុខងារខ្ពស់។ ជាមួយនឹងមូលដ្ឋានគ្រឹះដ៏រឹងមាំក្នុងការរចនា ខ្ញុំបានបំប្លែងគំនិតទៅជាប្លង់ដែលមើលឃើញ ខណៈពេលដែលជំនាញបច្ចេកទេសរបស់ខ្ញុំនៅក្នុង HTML, CSS, JavaScript និងក្របខ័ណ្ឌដូចជា Bootstrap និង Vue.js ជួយនាំយកការរចនាទាំងនោះមកជីវិតនៅលើបណ្តាញ។ លើសពីនេះ បទពិសោធន៍អភិវឌ្ឍន៍ផ្នែកខាងក្រោយរបស់ខ្ញុំធានាបាននូវប្រព័ន្ធដែលមានប្រសិទ្ធភាព និងអាចធ្វើមាត្រដ្ឋានបាន ដោយរួមបញ្ចូលមូលដ្ឋានទិន្នន័យដូចជា MySQL និងការអនុវត្តយុទ្ធសាស្ត្រគ្រប់គ្រងគម្រោងដែលសម្រួលលំហូរការងារ។ ខ្ញុំតែងតែស្វែងរកបញ្ហាប្រឈមថ្មីៗដែលអនុញ្ញាតឱ្យខ្ញុំបញ្ចូលគ្នានូវភាពច្នៃប្រឌិតជាមួយនឹងបច្ចេកវិទ្យា ដោយជំរុញឱ្យមានព្រំដែននៃអ្វីដែលអាចធ្វើទៅបាននៅក្នុងដំណោះស្រាយឌីជីថល។"


    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n