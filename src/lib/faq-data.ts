export interface FaqItem {
  question: string;
  answer: string;
  listItems?: string[];
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    items: [
      {
        question: 'What is Storehouse?',
        answer: 'Storehouse is a budgeting app built on a simple idea: give first, save second, spend what\'s left. Instead of managing dozens of category budgets, you see one number -- your Safe to Spend -- which tells you exactly what\'s available after your priorities are handled.',
      },
      {
        question: 'How is Storehouse different from other budgeting apps?',
        answer: 'Most budgeting apps focus on tracking where your money went. Storehouse focuses on where your money goes first -- your giving, saving, and bills. Once those priorities are set, everything else is Safe to Spend. No guilt. No category budgets. Just clarity.',
      },
      {
        question: 'Who is Storehouse for?',
        answer: 'Storehouse is for anyone who wants financial peace without the complexity of traditional budgeting. It\'s especially helpful for:',
        listItems: [
          'People who want to prioritize giving but struggle to make it happen',
          'Those with variable or irregular income (commission, freelance, seasonal)',
          'Anyone exhausted by category-based budgets that feel like restriction',
          'Families wanting a simple system everyone can understand',
        ],
      },
      {
        question: 'Is Storehouse a religious app?',
        answer: 'Storehouse is built on financial principles from the Bible -- give first, save with foresight, spend what remains. You don\'t need to share that belief to benefit from the approach, but we\'re not going to pretend the foundation is something else. The app itself doesn\'t require any religious commitment -- just a desire for financial peace.',
      },
    ],
  },
  {
    id: 'how-it-works',
    label: 'How It Works',
    items: [
      {
        question: 'What is "Safe to Spend"?',
        answer: 'Safe to Spend is the single number at the heart of Storehouse. It shows you exactly what\'s available to spend after your giving, saving, and bills are accounted for. If you\'re within your Safe to Spend, you\'re good -- no need to check category budgets or do mental math.',
      },
      {
        question: 'How does the "Give First" system work?',
        answer: 'When you set up Storehouse, you define your giving priorities -- whether that\'s tithing, charitable donations, or supporting causes you care about. These amounts are automatically accounted for at the beginning of each pay period, not treated as leftovers at the end.',
      },
      {
        question: 'What is the Margin feature?',
        answer: 'Margin is the breathing room between your income and your spending. Storehouse tracks your margin health by showing how many months of expenses you have saved. The Joseph Principle \u2014 store during plenty so you\'re ready for lean seasons \u2014 is built into how margin works. The goal is to build margin during good seasons so you can weather whatever comes next without stress.',
      },
      {
        question: 'What is the "Joseph Principle"?',
        answer: 'The Joseph Principle comes from Genesis 41, where God revealed to Joseph that seven years of abundance would be followed by seven years of famine. Joseph\'s response \u2014 store during plenty so you can survive the lean \u2014 is the pattern Storehouse is built on. In Storehouse, this means building margin during seasons of abundance so you\'re prepared for whatever comes next \u2014 a job loss, medical expenses, economic shifts, or simply a slow month. The principle applies to anyone who wants financial breathing room, and it\'s especially powerful for those with variable income.',
      },
      {
        question: 'How does the Subscription Tracker work?',
        answer: 'Storehouse helps you track and manage your recurring charges. Add your subscriptions and see your total monthly and annual cost, plus potential savings if you cancel unused services.',
      },
      {
        question: 'Can I use Storehouse if my income is irregular?',
        answer: 'Yes \u2014 Storehouse was designed with variable income in mind. Traditional budgets assume steady paychecks, which doesn\'t work for commission salespeople, freelancers, or business owners. The Joseph Principle at Storehouse\'s core \u2014 store during plenty, draw during lean \u2014 handles the highs and lows seamlessly.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Billing',
    items: [
      {
        question: 'How much does Storehouse cost?',
        answer: 'Storehouse is $4.99/month or $49/year (save 2 months) for founding members. This price is locked in for life, even when regular pricing increases.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes. Every new account starts with a 14-day free trial. No credit card required to start. You can explore everything Storehouse offers before deciding.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Absolutely. There are no contracts or cancellation fees. If Storehouse isn\'t right for you, you can cancel with one click in your account settings.',
      },
      {
        question: 'What happens to my data if I cancel?',
        answer: 'Your data remains available for 30 days after cancellation in case you change your mind. After that, it\'s permanently deleted from our servers. You can also export your data anytime before canceling.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'If you\'re not satisfied within the first 30 days, contact us and we\'ll refund your payment. No questions asked.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    items: [
      {
        question: 'Is my financial data secure?',
        answer: 'Yes. Security is our top priority. We use 256-bit encryption for all data in transit and at rest. And here\'s something most finance apps can\'t say: we never ask for your bank login credentials. Your data comes in through file imports that you control \u2014 CSV, OFX, or QFX exports from your own bank. No third-party connections. No credentials stored. Your bank login stays between you and your bank.',
      },
      {
        question: 'Do you sell my data?',
        answer: 'Never. Your financial data is yours. We don\'t sell it, share it with advertisers, or use it for anything other than providing you the Storehouse service.',
      },
      {
        question: 'What information do you collect?',
        answer: 'We collect only what\'s necessary to provide the service: transaction data and balances from your imported files, your priority settings (giving, saving, bills), and email address for account access. We never ask for or store your bank login credentials.',
      },
      {
        question: 'Can I delete my data?',
        answer: 'Yes. You can request complete deletion of your account and all associated data at any time. Contact support or use the "Delete Account" option in settings.',
      },
    ],
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    items: [
      {
        question: 'Why "give first"? Shouldn\'t I save first?',
        answer: 'Most financial advice says "pay yourself first" -- save before you spend. That\'s not wrong. But we believe the order matters. When giving comes from leftovers, it feels like sacrifice. When giving comes first, it becomes foundation. It\'s a statement of priorities and an act of trust in God. Storehouse puts giving first, then saving, then bills -- and shows you what\'s left. This order reflects values, not just math.',
      },
      {
        question: 'What if I can\'t afford to give right now?',
        answer: 'That\'s okay. Storehouse doesn\'t require you to give anything. You set your own priorities. If giving isn\'t possible right now, set it to zero and focus on building margin. The app works either way. The "give first" philosophy is an invitation, not a requirement.',
      },
      {
        question: 'Where does the name "Storehouse" come from?',
        answer: 'The name comes from Malachi 3:10 -- \'Bring the whole tithe into the storehouse.\' In the Bible, the storehouse was where provision was kept for the community, especially for times of need. Storehouse the app carries that same idea: a place to manage your resources with wisdom and generosity.',
      },
      {
        question: 'Who created Storehouse?',
        answer: 'Storehouse was created by JR, a real estate professional with 20+ years of experience helping people make their biggest financial decision -- buying a home. The same philosophy of margin (don\'t buy the most house you can afford) applies to daily finances: don\'t spend everything you make. Leave room to breathe.',
      },
    ],
  },
];
