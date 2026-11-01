import AccordionItem from "./Item";

const Accordion = ({ options }) => {
  return (
    <div className="border order-2 md:order-1 rounded-lg divide-y divide-slate-300 border-slate-300 dark:border-dark-border dark:divide-dark-border overflow-hidden w-full mx-auto">
      {options.map((opt) => {
        return <AccordionItem {...opt} key={opt.id} />;
      })}
    </div>
  );
};

export default Accordion;
