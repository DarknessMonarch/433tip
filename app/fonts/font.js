import localFont from "next/font/local";

const OutfitBlack = localFont({
    src: "./Outfit-Black.woff",
    variable: "--font-outfit-black",
    weight: "900",
});

const OutfitBold = localFont({
    src: "./Outfit-Bold.woff",
    variable: "--font-outfit-bold",
    weight: "700",
});

const OutfitExtraBold = localFont({
    src: "./Outfit-ExtraBold.woff",
    variable: "--font-outfit-extrabold",
    weight: "800",
});

const OutfitExtraLight = localFont({
    src: "./Outfit-ExtraLight.woff",
    variable: "--font-outfit-extralight",
    weight: "200",
});

const OutfitLight = localFont({
    src: "./Outfit-Light.woff",
    variable: "--font-outfit-light",
    weight: "300",
});


const OutfitMedium = localFont({
    src: "./Outfit-Medium.woff",
    variable: "--font-outfit-medium",
    weight: "500",
});


const OutfitRegular = localFont({
    src: "./Outfit-Regular.woff",
    variable: "--font-outfit-regular",
    weight: "400",
});

const OutfitSemiBold = localFont({
    src: "./Outfit-SemiBold.woff",
    variable: "--font-outfit-semibold",
    weight: "600",
});

const OutfitThin = localFont({
    src: "./Outfit-Thin.woff",
    variable: "--font-outfit-thin",
    weight: "100",
});

export {
    OutfitBlack,
    OutfitBold,
    OutfitExtraBold,
    OutfitExtraLight,
    OutfitLight,
    OutfitMedium,
    OutfitRegular,
    OutfitSemiBold,
    OutfitThin,
}