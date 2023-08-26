import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import BooksSearch from "@/components/ui/booksSearch"
import GenericSearch from "@/components/ui/genericSearch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const SearchTabs=() => {
  return (
    <Tabs defaultValue="books" className="w-4/5 p-5">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="books">Books</TabsTrigger>
        <TabsTrigger value="general-search">Generic Search</TabsTrigger>
      </TabsList>`
        {/* first screen */}
        <BooksSearch />
        {/* end of first tab */}


        {/* second screen */}
        <GenericSearch />
        {/* end of second tab */}
    </Tabs>
  )
}
export default SearchTabs