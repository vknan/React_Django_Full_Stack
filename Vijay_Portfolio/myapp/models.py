from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.



class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateTimeField(default = datetime.now)
    lottieicon = models.URLField(max_length=200, blank=True, null = True) 
    instructor = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists

    def __str__(self):
        return self.title
    class meta:
        verbose_name = 'Course'
        verbose_name_plural = 'Courses'
    
class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=100)
    
    created = models.DateTimeField(default=datetime.now)
    # instructor = models.ForeignKey(User, on_delete=models.CASCADE)
    duration = models.DurationField(null=True, blank=True, verbose_name="Duration")

    class Meta:
        verbose_name = 'Lesson'
        verbose_name_plural = 'Lessons'

    def __str__(self):
        return self.title

class Module(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='modules')
    title = models.CharField(max_length=100)
    
    created = models.DateTimeField(default=datetime.now)
    
    duration = models.DurationField(null=True, blank=True, verbose_name="Duration")

    class Meta:
        verbose_name = 'Module'
        verbose_name_plural = 'Modules'

    def __str__(self):
        return self.title

class SubModule(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='submodules')
    title = models.CharField(max_length=100)
    description = CKEditor5Field('Text', config_name='extends', default = 'Enter text here')
    created = models.DateTimeField(default=datetime.now)
    instructor = models.ForeignKey(User, on_delete=models.CASCADE)
    duration = models.DurationField(null=True, blank=True, verbose_name="Duration")

    class Meta:
        verbose_name = 'SubModule'
        verbose_name_plural = 'SubModules'

    def __str__(self):
        return self.title

class Quiz(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Enrollment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrolled = models.BooleanField(default=False)
    enrolled_at = models.DateTimeField(auto_now_add=True)


class Tag(models.Model):
    name = models.CharField(max_length=100)

class Progress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)

class DiscussionPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)















class about(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to = 'about/')
    created = models.DateTimeField(default = datetime.now)

    def __str__(self):
        return self.name
    class meta:
        verbose_name = 'About'
        verbose_name_plural = 'Abouts'










class Category(models.Model):
    name = models.CharField(max_length=255)
    created = models.DateTimeField(default = datetime.now)

    def __str__(self):
        return self.name
    class meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Post(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name = 'categories')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')

    title = models.CharField(max_length =255)
    thumbnail = models.ImageField(upload_to = 'post/thumbnail')

    description = CKEditor5Field('Text', config_name='extends', default = 'Enter text here')
    tags = models.CharField(max_length=255)

    posted_at = models.DateField(default = datetime.now)  
    is_published = models.BooleanField(default = False)


    class Meta:
        verbose_name = ("Post")
        verbose_name_plural = ('Posts')

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name = 'comments')
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    website = models.CharField(max_length = 100, null=True, blank=True)
    comment = models.TextField()
    commented_at = models.DateTimeField(default= datetime.now)
    is_resolved = (models.BooleanField(default = False))
    def __str__(self):
        return self.email
    class Meta:
        verbose_name = ("comment")
        verbose_name_plural = ('comments')


class Contact(models.Model):
    name = models.CharField(max_length = 255)
    email = models.EmailField()
    subject = models.CharField(max_length = 255)
    message = models.TextField()
    is_resolved = (models.BooleanField(default = False))
    contacted_date = models.DateTimeField(default= datetime.now)

    def __str__(self):
        return self.email
    class Meta:
        verbose_name = ("Contact")
        verbose_name_plural = ('Contacts')


# class ProductCategory(models.Model):
#     name = models.CharField(max_length=255)

#     class Meta:
#         verbose_name = "Product Category"
#         verbose_name_plural = "Product Categories"

#     def __str__(self):
#         return self.name


# class Product(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField()
#     price_actual = models.DecimalField(max_digits=10, decimal_places=2)
#     discounted_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     avg_rating = models.FloatField(default=0)
#     product_image = models.ImageField(upload_to='product_images/')
#     demo_link = models.URLField(null=True, blank=True)
#     product_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
#     date_added = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         verbose_name = "Product"
#         verbose_name_plural = "Products"

#     def __str__(self):
#         return self.name


# class Customer(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null = False)
#     name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     phone_number = models.CharField(max_length=20)
#     shipping_address = models.TextField()
#     payment_info = models.TextField()

#     class Meta:
#         verbose_name = "Customer"
#         verbose_name_plural = "Customers"

#     def __str__(self):
#         return self.name


# class OrderItem(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     ordered = models.BooleanField(default=False)
#     date_added = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         verbose_name = "Order Item"
#         verbose_name_plural = "Order Items"

#     def __str__(self):
#         return f"{self.product.name} - {self.customer.name}"


# class Review(models.Model):
#     customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     rating = models.DecimalField(max_digits=3, decimal_places=2)
#     comment = models.TextField()

#     class Meta:
#         verbose_name = "Review"
#         verbose_name_plural = "Reviews"

#     def __str__(self):
#         return f"{self.customer} - {self.product}"

#-------------------------------------------------------------------
# class FilesAdmin(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
#     adminupload = models.FileField(upload_to='product_files/', default='default_file.pdf')
#     title = models.CharField(max_length=50, null=True)
#     class Meta:
#         verbose_name = "Files Admin"
#         verbose_name_plural = "Files Admin"

#     def __str__(self):
#         if self.product:
#             return f"{self.product.name} - {self.adminupload.name}"
#         return f"FilesAdmin - {self.adminupload.name}"
