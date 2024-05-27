import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";

export default function LandingFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get answers to our most commonly asked questions
          </p>
        </div>
        <div className="mx-auto max-w-3xl pt-8">
          <Collapsible className="space-y-2">
            <div>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700">
                How do I get started?
                <ChevronDownIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                To begin your journey with AbokiCode, simply fill out the
                interest form on our website and we will follow up with you
                regarding registration. For the course, we will use Telegram and
                Repl.it
              </CollapsibleContent>
            </div>
            <div>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700">
                Do i need any experience to join the course?
                <ChevronDownIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                Our program is designed for complete beginners with no prior
                coding experience.
              </CollapsibleContent>
            </div>
            <div>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700">
                Is this program entirely online?
                <ChevronDownIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                Aboke Code is designed to be as accessible as possible. It is
                completely online with real-time support from teachers and
                designated weekly extra help hours.
              </CollapsibleContent>
            </div>
            <div>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 text-left font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-800 dark:hover:bg-gray-700">
                What kinds of career opportunities are available after
                completing the program?
                <ChevronDownIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
                Our curriculum prepares you to become a full-stack developer
                which makes you suitable for roles in web development. By the
                end of the course, you will have projects to add to your
                portfolio in order to become competitive in real world job
                markets.
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
