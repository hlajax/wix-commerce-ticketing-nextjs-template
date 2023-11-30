import Image from 'next/image';
import { wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function HomeScreen({
  events,
  productsForCategories,
}: {
  events: wixEvents.Event[];
  productsForCategories: { category: string; product: products.Product }[];
}) {
  return (
    <div className="mx-auto relative">
      <div className="relative">
        <div className="flex sm:flex-row flex-col bg-zinc-900">
          <div className="basis-1/2 text-center sm:text-left relative">
            <div
              className="px-10 sm:px-14 py-6 bg-site"
              data-testid={testIds.HOME_PAGE.HEADER}
            >
              <h1 className="text-4xl sm:text-[120px] leading-none animate-fade-in">
                Produits
                <br /> de santé et
                <br /> bien être
                <br /> Pour tous
              </h1>
              <h3 className="text-base sm:text-2xl py-6">
                Chez <span className="text-purple-500">AFRIKSANTE</span>
                ,nous avons ce qu'il vous faut !
              </h3>
            </div>
            <div className="bg-zinc-900 h-[75px] w-full"></div>
          </div>
          <div className="basis-1/2">
            <Image
              src="https://static.wixstatic.com/media/cdfbfd_a5f392d00e9c4d0dbe9ef9fd25b6a2d3~mv2.png/v1/fill/w_918,h_585,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdfbfd_a5f392d00e9c4d0dbe9ef9fd25b6a2d3~mv2.png"
              alt="Ariksante home image"
              className="w-full px-10 sm:px-0"
              width={1000}
              height={800}
            />
          </div>
        </div>
        <Image
          className="absolute inset-x-2/4 -translate-x-2/4 -translate-y-[20%] bottom-0 top-[20%] hidden sm:block"
          src="https://static.wixstatic.com/media/cdfbfd_0dfc4de0c8f14c6690a5e3a84c9dd8f9~mv2.png/v1/fill/w_202,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdfbfd_0dfc4de0c8f14c6690a5e3a84c9dd8f9~mv2.png"
          alt="Afriksante second home image"
          width={202}
          height={245}
        />
      </div>
      {productsForCategories.length ? (
        <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
          <div className="text-custom-1 text-center sm:text-left pt-10 sm:py-20 basis-1/2">
            <h1 className="uppercase text-4xl sm:text-7xl text-center sm:text-left text-black">
              Nos Produits
            </h1>
            <p className="text-lg my-10 text-black">Visitez notre boutique</p>
            <a
              href="/shop"
              className="btn-main rounded-2xl text-base px-8 py-2.5"
            >
              Voir tous nos produits
            </a>
            {productsForCategories[1]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-[300px]">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[1]?.product!.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[1]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] text-black relative z-10">
                  <a href="/shop">{productsForCategories[1]?.category}</a>
                </span>
              </div>
            ) : null}
          </div>
          <div className="basis-1/2">
            {productsForCategories[0]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-[220px]">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[0]?.product!.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[0]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] relative z-10">
                  <a href="/shop">{productsForCategories[0]?.category}</a>
                </span>
              </div>
            ) : null}
            {productsForCategories[2]?.product?.media?.mainMedia ? (
              <div className="mt-10 sm:mt-40">
                <a href="/shop" className="h-auto max-w-full inline-block">
                  <WixMediaImage
                    media={
                      productsForCategories[2]?.product?.media!.mainMedia!
                        .image!.url!
                    }
                    width={800}
                    height={800}
                    alt={
                      productsForCategories[2]?.product!.media!.mainMedia!
                        .image!.altText!
                    }
                  />
                </a>
                <span className="font-bold text-2xl sm:text-5xl block text-center mt-[-15px] sm:mt-[-30px] relative z-10">
                  <a href="/shop">{productsForCategories[2]?.category}</a>
                </span>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No categories found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fcategories%2Flist%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to create event categories. Once
          added, they will appear here.
        </div>
      )}
    </div>
  );
}
