import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
    return (
        <article className="prose md:prose-lg lg:prose-xl prose-img:rounded-md">
            <h1 className="font-serif">Nucleobase Classification</h1>
            <Separator />
            <p>
                The nucleobases are classified into two types: the purines, A
                and G, which are fused five- and six-membered heterocyclic
                compounds, and the pyrimidines, the six-membered rings C and
                T.[12] A fifth pyrimidine nucleobase, uracil (U), usually takes
                the place of thymine in RNA and differs from thymine by lacking
                a methyl group on its ring. In addition to RNA and DNA, many
                artificial nucleic acid analogues have been created to study the
                properties of nucleic acids, or for use in biotechnology.
            </p>
            <h2>Non-canonical bases</h2>
            <p>
                Modified bases occur in DNA. The first of these recognized was
                5-methylcytosine, which was found in the genome of Mycobacterium
                tuberculosis in 1925.[20] The reason for the presence of these
                noncanonical bases in bacterial viruses (bacteriophages) is to
                avoid the restriction enzymes present in bacteria. This enzyme
                system acts at least in part as a molecular immune system
                protecting bacteria from infection by viruses.[21] Modifications
                of the bases cytosine and adenine, the more common and modified
                DNA bases, play vital roles in the epigenetic control of gene
                expression in plants and animals.
            </p>
            <p>
                A number of noncanonical bases are known to occur in DNA.[23]
                Most of these are modifications of the canonical bases plus
                uracil.{" "}
            </p>
            <ul>
                <li>
                    Modified Adenine
                    <ul>
                        <li>N6-carbamoyl-methyladenine</li>
                        <li>N6-methyladenine</li>
                    </ul>
                </li>
                <li>
                    Modified Guanine
                    <ul>
                        <li>7-Deazaguanine</li>
                        <li>7-Methylguanine</li>
                    </ul>
                </li>
                <li>
                    Modified Cytosine
                    <ul>
                        <li>N4-Methylcytosine</li>
                        <li>5-Carboxylcytosine</li>
                        <li>5-Formylcytosine</li>
                        <li>5-Glycosylhydroxymethylcytosine</li>
                        <li>5-Hydroxycytosine</li>
                        <li>5-Methylcytosine</li>
                    </ul>
                </li>
                <li>
                    Modified Thymidine
                    <ul>
                        <li>α-Glutamythymidine</li>
                        <li>α-Putrescinylthymine</li>
                    </ul>
                </li>
                <li>
                    Uracil and modifications
                    <ul>
                        <li>Base J</li>
                        <li>Uracil</li>
                        <li>5-Dihydroxypentauracil</li>
                        <li>5-Hydroxymethyldeoxyuracil</li>
                    </ul>
                </li>
                <li>
                    Others
                    <ul>
                        <li>Deoxyarchaeosine</li>
                        <li>2,6-Diaminopurine (2-Aminoadenine)</li>
                    </ul>
                </li>
            </ul>
            <h2>Grooves</h2>
            <figure className="mx-auto w-[80%]">
                <Image
                    src="/dna-ligand.png"
                    alt="dna ligand"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full"
                ></Image>
                <figcaption>
                    DNA major and minor grooves. The latter is a binding site
                    for the Hoechst stain dye 33258.
                </figcaption>
            </figure>
            <p>
                Twin helical strands form the DNA backbone. Another double helix
                may be found tracing the spaces, or grooves, between the
                strands. These voids are adjacent to the base pairs and may
                provide a binding site. As the strands are not symmetrically
                located with respect to each other, the grooves are unequally
                sized. The major groove is 22 ångströms (2.2 nm) wide, while the
                minor groove is 12 Å (1.2 nm) in width.[24] Due to the larger
                width of the major groove, the edges of the bases are more
                accessible in the major groove than in the minor groove. As a
                result, proteins such as transcription factors that can bind to
                specific sequences in double-stranded DNA usually make contact
                with the sides of the bases exposed in the major groove.[25]
                This situation varies in unusual conformations of DNA within the
                cell (see below), but the major and minor grooves are always
                named to reflect the differences in width that would be seen if
                the DNA was twisted back into the ordinary B form.
            </p>
            <h2>Base pairing</h2>
            <p>
                In a DNA double helix, each type of nucleobase on one strand
                bonds with just one type of nucleobase on the other strand. This
                is called complementary base pairing. Purines form hydrogen
                bonds to pyrimidines, with adenine bonding only to thymine in
                two hydrogen bonds, and cytosine bonding only to guanine in
                three hydrogen bonds. This arrangement of two nucleotides
                binding together across the double helix (from six-carbon ring
                to six-carbon ring) is called a Watson-Crick base pair. DNA with
                high GC-content is more stable than DNA with low GC-content. A
                Hoogsteen base pair (hydrogen bonding the 6-carbon ring to the
                5-carbon ring) is a rare variation of base-pairing.[26] As
                hydrogen bonds are not covalent, they can be broken and rejoined
                relatively easily. The two strands of DNA in a double helix can
                thus be pulled apart like a zipper, either by a mechanical force
                or high temperature.[27] As a result of this base pair
                complementarity, all the information in the double-stranded
                sequence of a DNA helix is duplicated on each strand, which is
                vital in DNA replication. This reversible and specific
                interaction between complementary base pairs is critical for all
                the functions of DNA in organisms
            </p>
        </article>
    );
}
