import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
    return (
        <article className="prose md:prose-lg lg:prose-xl prose-img:rounded-md">
            <h1 className="font-serif">The Blueprint of Life</h1>
            <Separator />
            <p>
                Deoxyribonucleic acid (/diːˈɒksɪˌraɪboʊnjuːˌkliːɪk, -ˌkleɪ-/
                ⓘ;[1] DNA) is a polymer composed of two polynucleotide chains
                that coil around each other to form a double helix. The polymer
                carries genetic instructions for the development, functioning,
                growth and reproduction of all known organisms and many viruses.
                DNA and ribonucleic acid (RNA) are nucleic acids. Alongside
                proteins, lipids and complex carbohydrates (polysaccharides),
                nucleic acids are one of the four major types of macromolecules
                that are essential for all known forms of life.{" "}
            </p>
            <figure className="mx-auto w-[80%]">
                <Image
                    src="/blueprint-of-life.avif"
                    alt="blueprint of life"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full"
                ></Image>
                <figcaption>Blueprint of life.</figcaption>
            </figure>
            <p>
                The two DNA strands are known as polynucleotides as they are
                composed of simpler monomeric units called nucleotides.[2][3]
                Each nucleotide is composed of one of four nitrogen-containing
                nucleobases (cytosine [C], guanine [G], adenine [A] or thymine
                [T]), a sugar called deoxyribose, and a phosphate group. The
                nucleotides are joined to one another in a chain by covalent
                bonds (known as the phosphodiester linkage) between the sugar of
                one nucleotide and the phosphate of the next, resulting in an
                alternating sugar-phosphate backbone. The nitrogenous bases of
                the two separate polynucleotide strands are bound together,
                according to base pairing rules (A with T and C with G), with
                hydrogen bonds to make double-stranded DNA. The complementary
                nitrogenous bases are divided into two groups, the single-ringed
                pyrimidines and the double-ringed purines. In DNA, the
                pyrimidines are thymine and cytosine; the purines are adenine
                and guanine.{" "}
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
            <ul>
                <li>
                    <strong>Basic Structure</strong>
                    <ul>
                        <li>DNA is a long polymer made up of nucleotides.</li>
                        <li>
                            Each nucleotide consists of a sugar (deoxyribose), a
                            phosphate group, and a nitrogenous base (adenine,
                            thymine, guanine, or cytosine).
                        </li>
                        <li>
                            DNA typically exists as a double helix, with two
                            strands wound around each other.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Double Helix</strong>
                    <ul>
                        <li>
                            The two strands of DNA are antiparallel, meaning
                            they run in opposite directions.
                        </li>
                        <li>
                            The strands are held together by hydrogen bonds
                            between the nitrogenous bases.
                        </li>
                        <li>
                            Adenine pairs with thymine, and guanine pairs with
                            cytosine.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Sugar-Phosphate Backbone</strong>
                    <ul>
                        <li>
                            The backbone of each DNA strand is composed of
                            alternating sugar and phosphate groups.
                        </li>
                        <li>
                            The 5&apos; end of a DNA strand has a phosphate
                            group, while the 3&apos; end has a hydroxyl group.
                        </li>
                        <li>
                            The directionality of the strands is crucial for DNA
                            replication and transcription.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Comparison with RNA</strong>
                    <ul>
                        <li>
                            DNA and RNA are similar in structure but differ in
                            the sugar component.
                        </li>
                        <li>
                            DNA contains deoxyribose sugar, while RNA contains
                            ribose sugar.
                        </li>
                        <li>
                            RNA is typically single-stranded, unlike DNA, which
                            is double-stranded.
                        </li>
                    </ul>
                </li>
            </ul>
            <p>
                Within eukaryotic cells, DNA is organized into long structures
                called chromosomes. Before typical cell division, these
                chromosomes are duplicated in the process of DNA replication,
                providing a complete set of chromosomes for each daughter cell.
                Eukaryotic organisms (animals, plants, fungi and protists) store
                most of their DNA inside the cell nucleus as nuclear DNA, and
                some in the mitochondria as mitochondrial DNA or in chloroplasts
                as chloroplast DNA.[5] In contrast, prokaryotes (bacteria and
                archaea) store their DNA only in the cytoplasm, in circular
                chromosomes. Within eukaryotic chromosomes, chromatin proteins,
                such as histones, compact and organize DNA. These compacting
                structures guide the interactions between DNA and other
                proteins, helping control which parts of the DNA are
                transcribed.{" "}
            </p>
        </article>
    );
}
