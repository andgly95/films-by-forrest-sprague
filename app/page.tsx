import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-900 text-white">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-8 font-serif">
          Films by Forrest Sprague
        </h1>
        <p className="text-2xl mb-12 text-center max-w-3xl font-serif">
          Forrest Sprague is an American structuralist experimental filmmaker
          based in Manhattan.
        </p>
      </section>

      <section className="film relative min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/862057536?h=fffb3d4336&loop=1"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="p-8 max-w-4xl text-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-semibold mb-6 text-amber-500 font-serif">
              Epiphany I
            </h2>
            <p className="text-xl leading-relaxed font-serif italic">
              &quot;Beautiful landscapes of the exceptional mundane. Working in
              an industrial setting, I can appreciate the nonchalance and
              fluidity of routine work playing out. The proportions of these
              shots are well thought out, and the lighting is gorgeous and
              moody. There&apos;s something to be said about the perspective of
              looking at a scene from afar as well; it evokes something, makes
              me think of the scene in Stroszek where they go out to the frozen
              pond. It gets me thinking about shots like these in a narrative
              setting.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="film relative min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/861839629?h=b8cfff73c5&loop=1"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="p-8 max-w-4xl text-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-semibold mb-6 text-amber-500 font-serif">
              Palinopsia
            </h2>
            <p className="text-xl leading-relaxed font-serif italic">
              &quot;Absolutely stunning. The textures, the rhythmic pacing, the
              sense of travel, mixing landscapes with abstract patterns. Like a
              film reel with hundreds of paintings in motion.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="film relative min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/488220982?h=35a8fc8888&loop=1"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="p-8 max-w-4xl text-center bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-semibold mb-6 text-amber-500 font-serif">
              Cherokee (2020)
            </h2>
            <p className="text-xl leading-relaxed font-serif italic">
              &quot;I&apos;m honored, thank you!&quot;
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-8 text-amber-500 font-serif">
            About Forrest Sprague
          </h2>
          <p className="text-xl leading-relaxed font-serif mb-8">
            Forrest Sprague is an acclaimed American structuralist experimental
            filmmaker based in Manhattan. With a keen eye for composition and a
            unique approach to storytelling, Sprague&apos;s films explore the
            beauty and complexity of the world around us. His work has been
            featured in numerous film festivals and exhibitions worldwide,
            garnering critical acclaim for its thought-provoking and visually
            stunning content.
          </p>
          <p className="text-xl leading-relaxed font-serif mb-8">
            Through his films, Sprague invites viewers to embark on a journey of
            introspection and reflection, challenging traditional notions of
            narrative and form. His distinctive style, characterized by long
            takes, carefully framed shots, and a focus on the everyday, has
            established him as a prominent figure in the world of experimental
            cinema.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.imdb.com/name/nm14280863/"
              className="text-amber-500 hover:text-amber-400 text-xl font-semibold font-serif"
            >
              IMDb
            </a>
            <a
              href="https://vimeo.com/forrestsprague/"
              className="text-amber-500 hover:text-amber-400 text-xl font-semibold font-serif"
            >
              Vimeo
            </a>
            <a
              href="https://letterboxd.com/forrest_s/"
              className="text-amber-500 hover:text-amber-400 text-xl font-semibold font-serif"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
