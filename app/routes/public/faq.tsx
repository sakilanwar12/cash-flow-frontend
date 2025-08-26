
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wallet, Shield, CreditCard, Users, HelpCircle, Lock } from 'lucide-react';

export default function WalletFAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Wallet className="w-5 h-5" />,
      questions: [
        {
          question: "How do I create a new wallet account?",
          answer: "Creating an account is simple! Click the 'Sign Up' button, provide your email address, create a secure password, and verify your email. You'll then need to complete identity verification by uploading a government-issued ID and proof of address."
        },
        {
          question: "What information do I need to verify my account?",
          answer: "For account verification, you'll need a government-issued photo ID (passport, driver's license, or national ID card) and a recent utility bill or bank statement as proof of address. The verification process typically takes 1-3 business days."
        },
        {
          question: "Is there a minimum deposit required?",
          answer: "There's no minimum deposit required to open your wallet. You can start with any amount you're comfortable with. However, some payment methods may have minimum transaction limits set by the payment processor."
        }
      ]
    },
    {
      title: "Security & Safety",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: "How secure is my money and personal information?",
          answer: "We use bank-level security measures including 256-bit SSL encryption, two-factor authentication (2FA), and cold storage for digital assets. Your funds are segregated and held in regulated financial institutions. We never store your payment card details on our servers."
        },
        {
          question: "What should I do if I suspect unauthorized access?",
          answer: "Immediately change your password, enable 2FA if not already active, and contact our support team. We monitor accounts 24/7 for suspicious activity and will freeze accounts automatically if fraud is detected. Check your transaction history regularly for any unfamiliar activities."
        },
        {
          question: "How do I enable two-factor authentication?",
          answer: "Go to Settings > Security > Two-Factor Authentication. You can choose between SMS codes, authenticator apps (Google Authenticator, Authy), or email verification. We strongly recommend using an authenticator app for enhanced security."
        }
      ]
    },
    {
      title: "Transactions & Payments",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "What payment methods are supported?",
          answer: "We support bank transfers (ACH), wire transfers, debit/credit cards (Visa, Mastercard, American Express), PayPal, and popular digital payment methods. Cryptocurrency deposits are available for Bitcoin, Ethereum, and other major coins."
        },
        {
          question: "How long do transactions take to process?",
          answer: "Internal transfers are instant. Bank transfers typically take 1-3 business days, while international wire transfers can take 3-5 business days. Card transactions are usually processed within minutes, and cryptocurrency transactions depend on network confirmation times."
        },
        {
          question: "What are the transaction fees?",
          answer: "Domestic bank transfers are free. International transfers have a flat fee of $15. Card transactions incur a 2.9% processing fee. Cryptocurrency transactions have network fees that vary by coin. Premium account holders enjoy reduced fees on all transactions."
        },
        {
          question: "Are there daily or monthly transaction limits?",
          answer: "Standard accounts have a $10,000 daily sending limit and $50,000 monthly limit. Verified accounts can request higher limits up to $100,000 daily. Receiving funds has no limits. Limits can be increased by contacting support with proper documentation."
        }
      ]
    },
    {
      title: "Account Management",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: "Can I have multiple wallets or sub-accounts?",
          answer: "Yes! You can create multiple wallets for different purposes (savings, business, family) within your main account. Each wallet has its own balance and transaction history. Business accounts can create wallets for different departments or projects."
        },
        {
          question: "How do I update my personal information?",
          answer: "Go to Settings > Profile to update your personal details. Changes to sensitive information like phone numbers or addresses may require additional verification. Legal name changes require supporting documentation."
        },
        {
          question: "Can I close my account? What happens to my funds?",
          answer: "You can close your account anytime by contacting support. You'll need to withdraw all funds first. We'll provide a final statement and permanently delete your personal information within 30 days, except for records required by law."
        }
      ]
    },
    {
      title: "Troubleshooting",
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: "I forgot my password. How can I reset it?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a secure reset link within minutes. If you don't see the email, check your spam folder. The reset link expires after 24 hours for security."
        },
        {
          question: "My transaction is showing as pending. What does this mean?",
          answer: "Pending transactions are being processed by our system or the recipient's bank. This usually resolves within 1-3 business days. For cryptocurrency, it means the transaction is awaiting network confirmations. Contact support if a transaction remains pending beyond expected timeframes."
        },
        {
          question: "I sent money to the wrong person. Can this be reversed?",
          answer: "Internal transfers to other wallet users can sometimes be reversed if contacted immediately. External bank transfers and card payments are generally final. Contact our support team within 24 hours for the best chance of resolution. We'll work with you and the recipient to resolve the issue."
        },
        {
          question: "The app/website is not working properly. What should I do?",
          answer: "Try clearing your browser cache and cookies, or update the mobile app to the latest version. Check our status page for any ongoing maintenance. If problems persist, contact support with details about your device, browser, and the specific issue you're experiencing."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using our wallet management platform. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Quick Contact Alert */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Lock className="h-4 w-4" />
          <AlertDescription className="text-blue-800">
            <strong>Need immediate help?</strong> Our 24/7 support team is available via live chat, 
            email at support@walletapp.com, or phone at 1-800-WALLET-1.
          </AlertDescription>
        </Alert>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 ml-auto">
                    {category.questions.length} questions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 shadow-lg border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Our dedicated support team is here to help you with any questions or concerns.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-gray-300">Available 24/7</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Email Support</h3>
                <p className="text-sm text-gray-300">support@walletapp.com</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Phone Support</h3>
                <p className="text-sm text-gray-300">1-800-WALLET-1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}