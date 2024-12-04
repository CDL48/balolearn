import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
    return (
        <article className="prose md:prose-lg lg:prose-xl prose-img:rounded-md">
            <h1 className="font-serif">Properties of a DNA</h1>
            <Separator />
            <p>
                DNA is a long polymer made from repeating units called
                nucleotides.[6][7] The structure of DNA is dynamic along its
                length, being capable of coiling into tight loops and other
                shapes.[8] In all species it is composed of two helical chains,
                bound to each other by hydrogen bonds. Both chains are coiled
                around the same axis, and have the same pitch of 34 ångströms
                (3.4 nm). The pair of chains have a radius of 10 Å (1.0 nm).[9]
                According to another study, when measured in a different
                solution, the DNA chain measured 22–26 Å (2.2–2.6 nm) wide, and
                one nucleotide unit measured 3.3 Å (0.33 nm) long.[10] The
                buoyant density of most DNA is 1.7g/cm3
            </p>
            <p>
                DNA does not usually exist as a single strand, but instead as a
                pair of strands that are held tightly together.[9][12] These two
                long strands coil around each other, in the shape of a double
                helix. The nucleotide contains both a segment of the backbone of
                the molecule (which holds the chain together) and a nucleobase
                (which interacts with the other DNA strand in the helix). A
                nucleobase linked to a sugar is called a nucleoside, and a base
                linked to a sugar and to one or more phosphate groups is called
                a nucleotide. A biopolymer comprising multiple linked
                nucleotides (as in DNA) is called a polynucleotide
            </p>
            <figure className="mx-auto w-[30%]">
                <Image
                    src="/dna-chemical-structure.svg"
                    alt="chemical structure of a dna"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full bg-white"
                ></Image>
                <figcaption>Chemical structure of a DNA.</figcaption>
            </figure>
            <p>
                Therefore, any DNA strand normally has one end at which there is
                a phosphate group attached to the 5′ carbon of a ribose (the 5′
                phosphoryl) and another end at which there is a free hydroxyl
                group attached to the 3′ carbon of a ribose (the 3′ hydroxyl).
                The orientation of the 3′ and 5′ carbons along the
                sugar-phosphate backbone confers directionality (sometimes
                called polarity) to each DNA strand. In a nucleic acid double
                helix, the direction of the nucleotides in one strand is
                opposite to their direction in the other strand: the strands are
                antiparallel. The asymmetric ends of DNA strands are said to
                have a directionality of five prime end (5′ ), and three prime
                end (3′), with the 5′ end having a terminal phosphate group and
                the 3′ end a terminal hydroxyl group. One major difference
                between DNA and RNA is the sugar, with the 2-deoxyribose in DNA
                being replaced by the related pentose sugar ribose in RNA.[
            </p>
            <p>
                Both strands of double-stranded DNA store the same biological
                information. This information is replicated when the two strands
                separate. A large part of DNA (more than 98% for humans) is
                non-coding, meaning that these sections do not serve as patterns
                for protein sequences. The two strands of DNA run in opposite
                directions to each other and are thus antiparallel. Attached to
                each sugar is one of four types of nucleobases (or bases). It is
                the sequence of these four nucleobases along the backbone that
                encodes genetic information. RNA strands are created using DNA
                strands as a template in a process called transcription, where
                DNA bases are exchanged for their corresponding bases except in
                the case of thymine (T), for which RNA substitutes uracil
                (U).[4] Under the genetic code, these RNA strands specify the
                sequence of amino acids within proteins in a process called
                translation.{" "}
            </p>
            <p>
                The DNA double helix is stabilized primarily by two forces:
                hydrogen bonds between nucleotides and base-stacking
                interactions among aromatic nucleobases.[16] The four bases
                found in DNA are adenine (A), cytosine (C), guanine (G) and
                thymine (T). These four bases are attached to the
                sugar-phosphate to form the complete nucleotide, as shown for
                adenosine monophosphate. Adenine pairs with thymine and guanine
                pairs with cytosine, forming A-T and G-C base pairs
            </p>
        </article>
    );
}
