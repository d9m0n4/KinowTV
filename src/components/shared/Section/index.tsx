import React from 'react';

interface ISection {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

const Section: React.FC<ISection> = ({ children, title }) => {
  return (
    <section className="my-8 py-2">
      <div className="container mx-auto">
        <div className="text-2xl font-bold text-ligth">
          <article>
            <h3>{title}</h3>
            <div className="mt-6">{children}</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section;
