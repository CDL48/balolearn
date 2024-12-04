import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
    return (
        <article className="prose md:prose-lg lg:prose-xl prose-img:rounded-md">
            <h1 className="font-serif">Amount of DNA</h1>
            <Separator />
            <p>
                In humans, the total female diploid nuclear genome per cell
                extends for 6.37 Gigabase pairs (Gbp), is 208.23 cm long and
                weighs 6.51 picograms (pg).[31] Male values are 6.27 Gbp, 205.00
                cm, 6.41 pg.[31] Each DNA polymer can contain hundreds of
                millions of nucleotides, such as in chromosome 1. Chromosome 1
                is the largest human chromosome with approximately 220 million
                base pairs, and would be 85 mm long if straightened.[32] In
                eukaryotes, in addition to nuclear DNA, there is also
                mitochondrial DNA (mtDNA) which encodes certain proteins used by
                the mitochondria. The mtDNA is usually relatively small in
                comparison to the nuclear DNA. For example, the human
                mitochondrial DNA forms closed circular molecules, each of which
                contains 16,569[33][34] DNA base pairs,[35] with each such
                molecule normally containing a full set of the mitochondrial
                genes. Each human mitochondrion contains, on average,
                approximately 5 such mtDNA molecules.[35] Each human cell
                contains approximately 100 mitochondria, giving a total number
                of mtDNA molecules per human cell of approximately 500.[35]
                However, the amount of mitochondria per cell also varies by cell
                type, and an egg cell can contain 100,000 mitochondria,
                corresponding to up to 1,500,000 copies of the mitochondrial
                genome (constituting up to 90% of the DNA of the cell).[
            </p>
            <figure className="mx-auto w-[80%]">
                <Image
                    src="/human-karyotype.png"
                    alt="human karyotype"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="mx-auto h-auto w-[50%]"
                ></Image>
                <figcaption>
                    Schematic karyogram of a human. It shows 22 homologous
                    chromosomes, both the female (XX) and male (XY) versions of
                    the sex chromosome (bottom right), as well as the
                    mitochondrial genome (to scale at bottom left).
                </figcaption>
            </figure>
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
                expression in plants and animals.[
            </p>
            <p>
                A number of noncanonical bases are known to occur in DNA.[23]
                Most of these are modifications of the canonical bases plus
                uracil.{" "}
            </p>
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
