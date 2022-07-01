import styles from '../styles/Home.module.css';
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const items = [{id: 1, title: 'Contact', subtitle: 'Write to us.'}, {
    id: 2, title: 'Gallery', subtitle: 'View our work.'
}, {id: 3, title: 'Team', subtitle: 'Know the people.'},]

function Home() {
    const [selectedId, setSelectedId] = useState(null)
    const [item, setItem] = useState(null);

    const handleCloseBlock = () => {
        setSelectedId(null)
        setItem(null)
    }

    return (
        <div className={styles.container}>
            <div className={styles.sectionsContainer}>
                {items.map(item => (
                    <motion.div
                        className={styles.singleBlock} layoutId={item.id} onClick={() => {
                        setSelectedId(item.id)
                        setItem(item)
                    }}>
                        <h2 className={'text-3xl font-bold underline text-uppercase'}>{item.title}</h2>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div className={styles.singleBlockActive} layoutId={selectedId}>
                        <h5>{item.subtitle}</h5>
                        <h2>{item.title}</h2>
                        <button onClick={handleCloseBlock} className={styles.closeBlockBtn}>
                            X
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div onClick={handleCloseBlock} className={`${styles.overlayBackground} ${selectedId && styles.overlayBackgroundActive}`}></div>
        </div>
    )
}

export default Home