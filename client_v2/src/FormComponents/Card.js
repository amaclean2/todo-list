import './forms.scss';

export const Card = ({ title = '', children }) => {
    return (
        <div className='card-background'>
            <section className='card'>
                <header>
                    {title}
                </header>
                <div>
                    {children}
                </div>
            </section>
        </div>
    )
};