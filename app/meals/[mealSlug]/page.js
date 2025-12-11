import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import { notFound }  from 'next/navigation';

export default async function MealDetailsPage({ params }) {
    const parm = await params;
    const meal = getMeal(parm.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>');
    console.log('console.log parm?', parm.mealSlug);
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>

                </div>

            </header>
            <main className={classes.main}>
                <p className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}

                ></p>
            </main>


        </>
    );
}