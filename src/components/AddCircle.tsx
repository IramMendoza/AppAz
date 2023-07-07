import { motion, useAnimation } from "framer-motion"

const AddCircle = () => {

    const animate = useAnimation()

    const variants = {
        animate: { y : [500,-500], duration : 1.5 }
    }

  return (
    <motion.div 
    className=' bg-gradient-to-r from-cyan-800 to-emerald-700 w-[5rem] h-[5rem] rounded-full relative'
    variants={variants}
    animate={animate}
    initial={{ y : -700 }}>
      x
    </motion.div>
  )
}

export default AddCircle
