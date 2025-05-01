import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { NftProfileCardGeneric} from "@/components/demoCard";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8 space-y-12">
          {/* Welcome Section */}
          <section className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              Welcome to <span className="text-blue-600">BingNFT</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The only decentralized Web3 Dapp to express yourself.
              <br />
              Express the next generation of business cards — with pictures.
            </p>
          </section>

          {/* Demo Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Card Demos</h2>

{/**template:
             <NftProfileCardGeneric
                username = ""
                imageUrl=""
                quote1=""
                quote2=""
            />
 */}

            <div className="grid gap-8 md:grid-cols-2">
             <NftProfileCardGeneric
                username = "IronMan"
                imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafybeiclj7t2al3bfde2jhvam4jxuojv2t7up5apyshcbjinyphlq6aalm/tony.jpg"
                quote1="Genius. Billionair. Playboy. Philanthropist"
                quote2="I am Iron Man"
            />
            <NftProfileCardGeneric
                username = "Sakura-Chan"
                imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafkreieohaisgcre4og22fwm7ljcr6bvqa5svrqjm7qqf7kwprp6dvxgzy"
                quote1="Everything will surely be all right"
                quote2="Feelings that are true will always reach their destination"
            />    
              <NftProfileCardGeneric
                  username="theBing"
                  imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafybeibc6wsl6m4bzrm3kvc2tcqjnyi4bjcfvkr7xoaoufovbbvwjqjrxe"
                  quote1="Gold in Apex & Val, thinks he's Radiant"
                  quote2="Falls on concrete like it’s a memory foam bed"
                  />
              <NftProfileCardGeneric
                  username = "RuanRuan"
                  imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafybeic7hxyygscskea4jn3y5vhgyw6jdkfvsdkdt7tgkegu32qupmyzqy"
                  quote1="Borest Person Alive"
                  quote2="Avoiding you is my best wish"
              />

            <NftProfileCardGeneric
                username = "Jolin Tsai"
                imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafybeiclj7t2al3bfde2jhvam4jxuojv2t7up5apyshcbjinyphlq6aalm/jolin%20tsai.jpg"
                quote1="做自己的女王"
                quote2="叛逆是我的时尚"
            />                   

              <NftProfileCardGeneric
                username = "Kobe Bryant"
                imageUrl="https://lavender-careful-horse-257.mypinata.cloud/ipfs/bafkreicuvfum2uzzblerc4525esng3vtje6ggeqxzf27y4ejiej7o7qlsa"
                quote1="Everything negative — pressure, challenges — is all an opportunity for me to rise."
                quote2="I have nothing in common with lazy people who blame others for their lack of success."
            />            
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
