import { motion } from 'framer-motion';



const Map = () => {
    

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-[450px] rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative z-0"
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31684.02249142273!2d80.18010389072968!3d6.949860155212474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a99e4c1f47cd%3A0xee25998579adfb13!2sAvissawella!5e0!3m2!1sen!2slk!4v1769886355780!5m2!1sen!2slk" 
                    width="1105" height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
        </motion.div>
    );
};

export default Map;