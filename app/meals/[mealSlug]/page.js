import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import classes from './page.module.css';

export default async function MealDetailsPage({ params }) {
    const parm = await params;
    const meal = getMeal(parm.mealSlug);

    console.log('console.log parm?', parm.mealSlug);
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>

                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${'EMAIL'}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>

                    </p>

                </div>

            </header>
            <main className={classes.main}>

            </main>


        </>
    );
}