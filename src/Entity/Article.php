<?php

    namespace App\Entity;

    use App\Repository\ArticleRepository;
    use Doctrine\Common\Collections\ArrayCollection;
    use \DateTimeImmutable;
    use \DateTime;

    use Doctrine\Common\Collections\Collection;
    use Doctrine\ORM\Mapping as ORM;
    use Symfony\Component\Validator\Constraints as Assert;
    use App\Entity\Category;





    #[ORM\Entity(repositoryClass: ArticleRepository::class)]
    class Article
    {
        #[ORM\Id]
        #[ORM\GeneratedValue]
        #[ORM\Column]
        private ?int $id = null;

        #[ORM\Column(length: 255)]
        #[Assert\Length(min:10,
        max:255 ,
        minMessage:"Votre titre est trop courte" )]
        private ?string $title = null;

        #[ORM\Column(type: 'text')]
        #[Assert\Length(
        min:10,
        max:255,
        minMessage:"Votre contenu est trop courte" )]

        private ?string $content = null;

        #[ORM\Column(length: 255)]
        #[Assert\Url()]
        private ?string $image = null;

        

        #[ORM\JoinColumn(name: "category_id", referencedColumnName: "id", nullable: false)]
        #[ORM\ManyToOne(inversedBy: 'articles' ,targetEntity: Category::class,)]
         private ?Category $category = null;
        

        /**
         * @var Collection<int, ArticleLike>
         * @ORM\OneToMany(targetEntity="App\Entity\ArticleLike", mappedBy="article", orphanRemoval=true)
         */
        private  $likes;

        /**
         * @var Collection<int, Comment>
         */
        #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'article', orphanRemoval: true)]
        private Collection $comments;
        
                
         /**
          * @var DateTimeImmutable|null
          */
        #[ORM\Column(type: 'datetime_immutable')]
        private ?DateTimeImmutable $createdAt = null;
      
       
        
        public function __construct()
                {
                    $this->comments = new ArrayCollection();
                    $this->likes = new ArrayCollection();
                    $this->createdAt = new DateTimeImmutable();
                // $this->createdAt = new \DateTimeImmutable();
                }
        
        public function getId(): ?int
        {
            return $this->id;
        }

        public function getTitle(): ?string
        {
            return $this->title;
        }

        public function setTitle(string $title): static
        {
            $this->title = $title;

            return $this;
        }

        public function getContent(): ?string
        {
            return $this->content;
        }

        public function setContent(string $content): static
        {
            $this->content = $content;

            return $this;
        }

        public function getImage(): ?string
        {
            return $this->image;
        }

        public function setImage(string $image): static
        {
            $this->image = $image;

            return $this;
        }

       
            public function getCreatedAt(): ?DateTimeImmutable
        {
            return $this->createdAt;
        }

        public function setCreatedAt(DateTimeImmutable $createdAt): self
        {
            $this->createdAt = $createdAt;
            return $this;
        }

        public function getCategory(): ?Category
        {
            return $this->category;
        }

        public function setCategory(?Category $category): self
        {
            $this->category = $category;

            return $this;
        }

        /**
         * @return Collection<int, Comment>
         */
        public function getComments(): Collection
        {
            return $this->comments;
        }

        public function addCommment(Comment $comment): static
        {
            if (!$this->comments->contains($comment)) {
                $this->comments->add($comment);
                $comment->setArticle($this);
            }

            return $this;
        }

        public function removeCommment(Comment $comment): static
        {
            if ($this->comments->removeElement($comment)) {
                // set the owning side to null (unless already changed)
                if ($comment->getArticle() === $this) {
                    $comment->setArticle(null);
                }
            }

            return $this;
        }
        
        /**
             * @return Collection
             */
            public function getLikes(): Collection
            {
                return $this->likes;
            }

            public function addLike(ArticleLike $like): self
            {
                if (!$this->likes->contains($like)) {
                    $this->likes->add($like);
                    $like->setArticle($this);
                }

                return $this;
            }

            public function removeLike(ArticleLike $like): self
            {
                if ($this->likes->removeElement($like)) {
                    // set the owning side to null (unless already changed)
                    if ($like->getArticle() === $this) {
                        $like->setArticle(null);
                    }
                }

                return $this;
            }

            public function getLikesCount(): int
            {
                return $this->likes->count();
            }
    }
