import { CourseCard } from "@/components/ui/course-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from "@/lib/data";

export default function CoursesPage() {
    const tags = coursesData
        .map((c) => c.tags.split(","))
        .flat()
        .filter((t, i, self) => !self.slice(0, i).includes(t));
    return (
        <div className="py-12">
            <h2 className="mb-8 text-center text-4xl font-bold">Courses</h2>
            <Tabs defaultValue="All" className="w-full">
                <TabsList className="mb-4 w-full justify-normal overflow-x-auto">
                    <TabsTrigger key="All" value="All">
                        All
                    </TabsTrigger>
                    {tags.sort().map((tag) => {
                        return (
                            <TabsTrigger key={tag} value={tag}>
                                {tag}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
                <TabsContent key="All" value="All">
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
                        {coursesData.map((course) => (
                            <CourseCard
                                key={course.slug}
                                slug={course.slug}
                                title={course.title}
                                teacherName={course.teacherName}
                                rating={course.rating}
                                raterCount={course.raterCount}
                                tags={course.tags}
                                imageUrl={course.imageUrl ?? ""}
                            />
                        ))}
                    </div>
                </TabsContent>
                {tags.sort().map((tag) => {
                    return (
                        <TabsContent key={tag} value={tag}>
                            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
                                {coursesData
                                    .filter((course) =>
                                        course.tags.includes(tag),
                                    )
                                    .map((course) => (
                                        <CourseCard
                                            key={course.slug}
                                            slug={course.slug}
                                            title={course.title}
                                            teacherName={course.teacherName}
                                            rating={course.rating}
                                            raterCount={course.raterCount}
                                            tags={course.tags}
                                            imageUrl={course.imageUrl ?? ""}
                                        />
                                    ))}
                            </div>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </div>
    );
}
